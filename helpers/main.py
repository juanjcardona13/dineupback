
from apps.accounts.models import DineUpUser
from termcolor import colored
from itertools import chain
from decimal import Decimal
import numbers
import datetime
from django.db.models.fields.files import FieldFile, ImageFieldFile
from django.db.models.query import QuerySet
import qrcode
from io import BytesIO
import base64


def build_advanced_filter_data_by_user(user, key, filter="exact"):
    dict_filter = {}
    if not user.is_superuser:
        dine_up_user = DineUpUser.objects.get(user=user)
        dict_filter = {
            "advanced_search": [
                {
                    "fields_and_filters": [
                        {
                            "field": key,
                            "filter": filter
                        }
                    ],
                    "search_values": [dine_up_user.pk]
                }
            ]
        }
    return dict_filter


def build_filter_data_by_user(user, key):
    dict_filter = {}
    if not user.is_superuser:
        dine_up_user = DineUpUser.objects.get(user=user)
        dict_filter = {
            "fields_of_model": {
                key: dine_up_user.pk
            }
        }
    return dict_filter

'''
Esta funcion es para imprimir en el terminal con color
'''
def dprint(d, key_format = "magenta", value_format = "yellow"):
    # print "DATO INICIAL ORIGINAL ====>", type(d), d,
    if isinstance(d, dict):
        for key in d.keys() :
            print (colored(key, key_format), colored(d[key], value_format))
    elif isinstance(d, list):
        for item in d:
            dprint(item)
    elif isinstance(d, tuple):
        for item in d:
            dprint(item)
    elif d is None:
        print (d)
    elif isinstance(d, bool):
        print (colored(d, 'red'))
    elif isinstance(d, (float, Decimal)):
        print (colored(d, "blue"))
    elif isinstance(d, numbers.Number):
        print (colored(d, "blue"))
    elif isinstance(d, datetime.date):
        print (colored(d, "blue"))
    elif isinstance(d, basestring):
        print (colored(d, "green"))
    elif isinstance(d, datetime.datetime):
        print (colored(d, "blue"))

    # elif isinstance(d, ImageFieldFile):
    #     try:
    #         return d.path
    #     except ValueError, e:
    #         return ''
    # elif isinstance(d, FieldFile):
    #     try:
    #         return d.path
    #     except ValueError, e:
    #         return ''
    # elif isinstance(d, QuerySet):
    #     if campos == '':
    #         return nojson2json(list(d.values()))
    #     else:
    #         campos = campos.strip().split(',')
    #         for item in campos:
    #             indice = campos.index(item)
    #             campos[indice] = item.strip()
    #         return nojson2json(list(d.values(*campos)))
    # else:
    #     """Si no se pudo manejar como un queryset, intento como un unico obj devuelto por un models.object.get()"""
    #     return nojson2json(class2dict(d))


def convertir_values_query_en_obj(model, list_values):
    
    def to_camel_case(snake_str):
        components = snake_str.split('_')
        camel = components[0]
        for x in components[1:]:
            camel += x.title()
        return camel

    # FUNC CERO, CLASIFICA POR ID
    def funcion_cero(list_dict):
        clasificacion1 = OrderedDict() 
        for obj in list_dict:
            if not obj['id'] in clasificacion1:
                clasificacion1.update({obj['id']: []})
        for obj in list_dict:
            for key, value in clasificacion1.items():
                if key == obj['id']:
                    clasificacion1[key].append(obj)
        return clasificacion1

    # FUNC UNO, CONVIERTE TODAS LAS LLAVES EN camelCase
    def funcion_uno(list_dict):
        for obj in list_dict:
            for old_key, old_value in obj.items():
                if '__' in old_key:
                    keys = old_key.split('__')
                    i = 0
                    for i in range(len(keys)):
                        if '_' in keys[i]:
                            keys[i] = to_camel_case(keys[i])
                    new_key = '__'.join(keys)
                    if new_key != old_key:
                        obj[new_key] = obj[old_key]
                        del obj[old_key]
                else:
                    if '_' in old_key:
                        obj[to_camel_case(old_key)] = obj[old_key]
                        del obj[old_key]

    # DEFINE LAS LLAVES QUE SON LISTAS
    def funcion_dos(list_dict):
        for obj in list_dict:
            for key, value in obj.items():
                if '__' in key:
                    keys = key.split('__')
                    if keys[1] == 'id':
                        if value == None:
                            obj[keys[0]] = None
                        else:
                            if not keys[0] in obj:
                                obj[keys[0]] = []
                    else:
                        if not keys[0] in obj:
                            obj[keys[0]] = []

    # CONCATENA LOS OBJS CORRESPONDIENTES A LAS LISTAS
    def funcion_tres(list_dict):
        for obj in list_dict:
            for key, value in obj.items():
                if type(value) == list:
                    obj2 = {}
                    for key2, value2 in obj.items():
                        if '__' in key2:
                            keys2 = key2.split('__')


                            if key == keys2[0]:
                                key_final = key2.replace(key + '__', '', 1)
                                obj2[key_final] = value2
                                if len(value) == 0:
                                    value.append(obj2)
                                del obj[key2]
        for obj2 in list_dict:
            for key2, value2 in obj2.items():
                if '__' in key2:
                    del obj2[key2]

    # FUNC GLOBAL, LLAMA LA FUNC DOS Y TRES
    def funcion_global(list_dict):
        funcion_dos(list_dict)
        funcion_tres(list_dict)

    # FUNC CUATRO REVISA LAS PROFUNDIDADES DE LOS OBJS PARA PROCESARLOS IGUAL QUE LO ANTERIOR
    def funcion_cuatro(list_dict=None, obj2=None):
        def funcion_interna(obj):
            for key, value in obj.items():
                if type(value) == list:
                    funcion_global(value)
                    funcion_cuatro(None, value[0])
        if list_dict is not None:
            for obj in list_dict:
                funcion_interna(obj)
        if obj2 is not None:
            funcion_interna(obj2)

    # FUNC PARA COMPARAR
    def funcion_comparador_de_objs(object1, object2):
        """ESTA FUNC SOLO DEBE DE RECIBIR STR, BOOLEAN, DICT, LIST O NONE"""

        if object1 is None and object2 is None:
            return True

        if type(object1) is bool and type(object2) is bool:
            return  object1 == object2

        if type(object1) is str and type(object2) is str:
            return  object1 == object2

        if type(object1) is dict and type(object2) is dict:
            def is_object(obj):
                return obj is not None and type(obj) is dict
            
            keys1 = object1.keys()
            keys2 = object2.keys()
            if len(keys1) != len(keys2):
                return False
            for key in keys1:
                val1 = object1[key]
                val2 = object2[key]
                are_objects = is_object(val1) and is_object(val2)
                if are_objects is True and funcion_comparador_de_objs(val1, val2) is False or are_objects is False and val1 != val2:
                    return False
            return True

        if type(object1) is list and type(object2) is list:
            if len(object1) != len(object2):
                return False
            else:
                for i in range(len(object1)):
                    if funcion_comparador_de_objs(object1[i], object2[i]) is False:
                        return False
                return object1.sort() == object2.sort()
        return False

    # FUNC SEIS COMPARA DOS OBJS A PARTIR DE SI ID PARA MIRAR SI SON DEL MISMO TIPO
    # Y SI LO SON ENTONCES LOS CONCATENA Y REVISA A PROFUNDIDAD PARA MIRAR SI TIENEN
    # ALGO DIFERENTE Y ASI CONCATENAR ESOS VALORES DIFERENTES
    def funcion_seis(obj1, obj2, key=None, obj_padre=None):
        if obj1['id'] == obj2['id']:
            for key, value in obj2.items():
                value1 = obj1[key]
                value2 = obj2[key]
                if funcion_comparador_de_objs(value1, value2) is False:
                    if type(value1) is list and type(value2) is list:
                        arr_objs_a_comparar_nuevamente = value1 + value2
                        funcion_cinco(arr_objs_a_comparar_nuevamente, key, obj1)
        else:
            ya_tiene_obj1 = False
            for obj in obj_padre[key]:
                ya_tiene_obj1 = funcion_comparador_de_objs(obj, obj1)
                if ya_tiene_obj1 is True:
                    break
            if ya_tiene_obj1 is False:
                obj_padre[key].append(obj1)
            ya_tiene_obj2 = False
            for obj in obj_padre[key]:
                ya_tiene_obj2 = funcion_comparador_de_objs(obj, obj2)
                if ya_tiene_obj2 is True:
                    break
            if ya_tiene_obj2 is False:
                obj_padre[key].append(obj2)

    # FUNC CINCO ORGANIZA LA CLASIFICACION1 DEJANDO YA UNA LISTA CON UN UNICO OBJECTO
    # Y CON TODOS SUS DIFERENTES VALORES CONCATENADOS POR MEDIO DE FUNC SEIS
    def funcion_cinco(list_dict, key=None, obj_padre=None):
        if key is not None:
            if len(list_dict) > 2:
                n = 0
                for obj in list_dict:
                    n += 1
                    if n < len(list_dict):
                        if obj['id'] == list_dict[n]['id']:
                            funcion_seis(obj, list_dict[n], key, obj_padre)
                            return
        copia_del_primer_obj = list_dict[0]
        for i in range(1, len(list_dict)):
            funcion_seis(copia_del_primer_obj, list_dict[i], key, obj_padre)
        
        if key is None:
            return copia_del_primer_obj
        
    clasificacion = funcion_cero(list_values)

    for key, value in clasificacion.items():
        funcion_uno(value)
        funcion_global(value)
        funcion_cuatro(value)
        clasificacion[key] = [funcion_cinco(value)]

    def to_snake_case(camelCaseStr):
        pattern = re.compile(r'(?<!^)(?=[A-Z])')
        camelCaseStr = pattern.sub('_', camelCaseStr).lower()
        return camelCaseStr

    def is_relation_or_related(model, field):
        field = to_snake_case(field)
        field = model._meta.get_field(field)
        try:
            field.related_name
            return 'lista', field.related_model
        except:
            if field.is_relation:
                try:
                    field.m2m_db_table
                    return 'lista', field.related_model
                except:
                    if field.remote_field.multiple:
                        return 'diccionario', field.related_model
                    else:
                        return 'diccionario', field.related_model

    # FUN SIETE VUELVE A DEJAR UN UNICO ARR CON TODOS LOS OBJS
    # YA CLASIFICADOS Y ORGANIZADOS POR EL ID
    def funcion_siete(obj):
        arrFinal = []
        for key, value in obj.items():
            arrFinal = arrFinal + obj[key]
        return arrFinal

    # YA POR ULTIMO LA FUNC OCHO REVISA SI LA LLAVE ES UN RELATED O UNA RELACION
    # Y CLASIFICA ASI QUIENES SON DICTS Y QUIENES LISTAS
    def funcion_ocho(model, arrObjs=None, obj2=None, devolver=False):
        def funcion_interna(model, obj):
            for key, value in obj.items():
                if type(value) is list:
                    tipo, model1 = is_relation_or_related(model, key)
                    if tipo == 'lista':
                        funcion_ocho(model1, obj[key], None, False)
                    else:
                        obj[key] = obj[key][0]
                        funcion_ocho(model1, None, obj[key], False)

        if arrObjs is not None:
            for obj in arrObjs:
                funcion_interna(model, obj)

        if obj2 is not None:
            funcion_interna(model, obj2)
            
        if devolver is True:
            return arrObjs

    arrPreFinal = funcion_siete(clasificacion)
    arrFinal = funcion_ocho(model, arrPreFinal, None, True)
    return arrFinal


def convertir_query_a_cadena_values(info):
    # OBSERVACIONES:  RECIBE UNA CONSULTA PAGINADA

    arrCadenasDeConsulta = []

    #  definicionOperacion = Es la primer parte, Inicia desde el nombre dado a la consulta,
    definicionOperacion = info.operation

    #  field, Aca ya tiene definido la consulta que va hacer
    field = definicionOperacion.selection_set.selections[0]

    #  selectionSet, Aca contiene el cuerpo de devolucion
    selectionSet = field.selection_set

    #  objects, Aca comienza el cuerpo de objects, el cual tiene los campos de los modelos
    objects = None
    for campo in selectionSet.selections:
        if campo.name.value == 'objects':
            objects = campo

    def FuncCamelTo_snake(camelCaseStr):
        pattern = re.compile(r'(?<!^)(?=[A-Z])')
        camelCaseStr = pattern.sub('_', camelCaseStr).lower()
        return camelCaseStr

    #  selections, Aca comienza en si los propios campos
    selections = objects.selection_set.selections

    def FuncConvertirCamposAValues(arr, padre=None):
        for campo in arr:
            #  Este es el nombre del campo en SI, convertido en snake_case
            value_in_snake = FuncCamelTo_snake(campo.name.value)
            if padre is not None:
                value_in_snake = padre + value_in_snake
            if campo.selection_set is not None: #  Y este me dice si tiene hijos o no,
                llave_foranea = value_in_snake + '__'
                FuncConvertirCamposAValues(campo.selection_set.selections, llave_foranea)
            else: #  si no tan solo es un campo lo envio ya para la cadena
                arrCadenasDeConsulta.append(value_in_snake)

    FuncConvertirCamposAValues(selections)

    return ', '.join(arrCadenasDeConsulta)


def class2dict(instance):
    opts = instance._meta
    data = {}
    for f in chain(opts.concrete_fields, opts.private_fields):
        data[f.name] = f.value_from_object(instance)
    for f in opts.many_to_many:
        data[f.name] = [i.id for i in f.value_from_object(instance)]
    return data


def datos2str(o, campos):
    if o is None:
        return o
    # Debe dejarse segundo boolean ya que este es una sub clase de Int
    elif isinstance(o, bool):
        return o
    elif isinstance(o, (float, Decimal)):
        return unicode(o)
    elif isinstance(o, numbers.Number):
        return unicode(o)
    elif isinstance(o, datetime.date):
        return unicode(o)
    elif isinstance(o, ImageFieldFile):
        try:
            return o.path
        except ValueError as  e:
            return ''
    elif isinstance(o, FieldFile):
        try:
            return o.path
        except ValueError as e:
            return ''
    elif isinstance(o, basestring):
        return o
    elif isinstance(o, datetime.datetime):
        return unicode(o)
    elif isinstance(o, list):
        return nojson2json(o)
    elif isinstance(o, dict):
        return nojson2json(o)
    elif isinstance(o, tuple):
        return nojson2json(o)
    elif isinstance(o, QuerySet):
        if campos == '' or campos == None:
            return nojson2json(list(o.values()))
        else:
            campos = campos.strip().split(',')
            for item in campos:
                indice = campos.index(item)
                campos[indice] = item.strip()
            return nojson2json(list(o.values(*campos)))
    else:
        """Si no se pudo manejar como un queryset, intento como un unico obj devuelto por un models.object.get()"""
        return nojson2json(class2dict(o))


def nojson2json(values, campos=None):
    if isinstance(values, list):
        for item in values:
            try:
                for key, value in item.items():
                    indice = values.index(item)
                    values[indice][key] = datos2str(value, campos)
            except:
                indice = values.index(item)
                values[indice] = datos2str(item, campos)
        return values
    if isinstance(values, tuple):
        for item in values:
            try:
                for key, value in item.items():
                    indice = values.index(item)
                    values[indice][key] = datos2str(value, campos)
            except:
                indice = values.index(item)
                values[indice] = datos2str(item, campos)
        return values
    elif isinstance(values, dict):
        for key, value in values.items():
            values[key] = datos2str(value, campos)
        return values
    else:
        return datos2str(values, campos)

def generate_base64_qr(url: str) -> str:
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )

    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    buffer = BytesIO()
    img.save(buffer, "PNG")
    qr_base64 = base64.b64encode(buffer.getvalue()).decode()

    return qr_base64