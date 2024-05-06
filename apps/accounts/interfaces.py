# import graphene
# from apps.accounts.models import DineUpUser, Employee, JobFunction, Role
# from helpers.main import build_filter_data_by_user
# from graphene_django_cruddals_v1.utils import merge_dict, filter_by_model_fields, filter_by_advanced_search, convert_model_to_input_object_type
# from graphene.types.generic import GenericScalar
# from graphene_django_cruddals_v1.registry_cruddals import get_global_registry_cruddals
# from django.db.models import Q
# from django.db import transaction
# from django.contrib.auth.models import User, Permission

# audit_fields = ["is_active", "created_by", "updated_by"]

# JobFunctionInput = convert_model_to_input_object_type(model=JobFunction, extra_meta_attrs={"exclude": audit_fields, "hold_required_in_fields": False})


# class UserInput(graphene.InputObjectType):
#     username = graphene.String(required=True)
#     password = graphene.String(required=True)
#     first_name = graphene.String(required=True)
#     last_name = graphene.String(required=True)
#     email = graphene.String(required=True)


# class DineUpUserLoginInterface:

#     class Create:
#         class Meta:
#             modify_input_argument = {
#                 "exclude": ["is_active"],
#                 "extra_fields": {
#                     "user": UserInput()
#                 }
                
#             }
        
#         def mutate(cls, root, info, dict_list, **kwargs):
#             with transaction.atomic():
#                 for d in dict_list:
#                     if 'user' in d:
#                         data_user = d['user']
#                         if isinstance(data_user, UserInput):
#                             user = User.objects.create_user(**data_user)
#                             d['user'] = user.pk
#                             all_permission = Permission.objects.all()
#                             user.user_permissions.set(all_permission)
#                 return super(cls, cls()).mutate_and_get_payload(root, info, dict_list, **kwargs)


import graphene
from apps.accounts.models import DineUpUser

class DineUpUserInterface:

    # class Type:
    #     meta_data = GenericScalar()

    #     def resolve_meta_data(dine_up_user, info):
    #         user = info.context.user
    #         if user and not user.is_anonymous:
    #             if user.pk == dine_up_user.user.pk:
    #                 try:
    #                     main_restaurant = dine_up_user.restaurants.filter(is_main=True, is_active=True)
    #                     main_branch = main_restaurant.branches.filter(is_main=True, is_active=True)
    #                     main_menu = main_branch.menus.filter(is_main=True, is_active=True)
    #                     return {
    #                         "main_restaurant_pk": main_restaurant.pk,
    #                         "main_branch_pk": main_branch.pk,
    #                         "main_menu_pk": main_menu.pk,
    #                     }
    #                 except:
    #                     return {}

    class Read:

        class Meta:
            modify_where_argument = {
                "required": False
            }
            extra_arguments = {
                "me": graphene.Boolean()
            }
        
        def pre_resolve(self, info, **kwargs):
            if "me" in kwargs:
                dine_up_user = DineUpUser.objects.get(user=info.context.user)
                kwargs = {
                    "where": {
                        "id": {
                            "exact": dine_up_user.pk
                        }
                    }
                }
            return self, info, kwargs

    # class List:
        
    #     def pre_resolve(self, info, **kwargs):
            
    #         actual_user = info.context.user
    #         dict_filter = build_filter_data_by_user(actual_user, "pk")
    #         kwargs = merge_dict(dict_filter, kwargs, overwrite=False, keep_both=True)
    #         return self, info, kwargs

    # class Search:
        
    #     def pre_resolve(self, info, **kwargs):
    #         #TODO: Esta consulta queda de cierta manera abierta
    #         # y es para cuando se esta creando un empleado en el front
    #         # para solucionarlo, voy a poner a la función de 'Search'
    #         # que reciba un parámetro adicional que es un token
    #         # que solo lo pueda generar esa función y que aca se 
    #         # se pueda decodificar y validar que viene exactamente de ahi
    #         if 'advanced_search' in kwargs:
    #             if len(kwargs["advanced_search"]) == 1:
    #                 if "fields_and_filters" in kwargs["advanced_search"][0]:
    #                     if len(kwargs["advanced_search"][0]["fields_and_filters"]) == 1:
    #                         if "field" in kwargs["advanced_search"][0]["fields_and_filters"][0]:
    #                             if kwargs["advanced_search"][0]["fields_and_filters"][0]["field"] == "user__username":
    #                                 return self, info, kwargs
    #         actual_user = info.context.user
    #         dict_filter = build_filter_data_by_user(actual_user, "pk")
    #         kwargs = merge_dict(dict_filter, kwargs, overwrite=False, keep_both=True)
    #         return self, info, kwargs


# class EmployeeInterface:

#     class Create:
#         class Meta:
#             modify_input_argument = {
#                 "extra_fields": {
#                     "job_functions": graphene.List(JobFunctionInput),
#                 }
#             }
        
#         def post_mutate(cls, root, info, input, response, **kwargs):
#             print("1==============================", response.objects)
#             if response.objects is not None:
#                 employees_extend = list(zip(response.objects, input))
#                 if len(employees_extend) > 0:
#                     for employee_extend in employees_extend:
#                         employee = employee_extend[0]
#                         try:
#                             extend = employee_extend[1]
#                             registry_cruddals = get_global_registry_cruddals()
#                             global_cruddals = registry_cruddals.registry_cruddals
                            
#                             #region ===== CREATE JOB FUNCTIONS OF EMPLOYEE
#                             job_functions_to_create = []
#                             for job_function_to_create in extend['job_functions']:
#                                 if "branch" in job_function_to_create and "roles" in job_function_to_create:
#                                     job_function_to_create.update({"employee": employee.pk})
#                                     job_functions_to_create.append(job_function_to_create)
                            
#                             cruddals_item_job_function = global_cruddals["JobFunction"]
#                             class_mutation_create_item_job_function = cruddals_item_job_function.meta.mutation_create
#                             job_functions_created = class_mutation_create_item_job_function.mutate_and_get_payload(root, info, job_functions_to_create)
#                             print("2============", job_functions_created.objects)
#                             #endregion

#                         except Exception as e:
#                             print(str(e))
#                             employee.delete()
                        
#             return response

#     class List:
        
#         def pre_resolve(self, info, **kwargs):
#             actual_user = info.context.user
#             dict_filter = build_filter_data_by_user(actual_user, key="dine_up_user")
#             kwargs = merge_dict(dict_filter, kwargs, overwrite=False, keep_both=True)
#             return self, info, kwargs

#     class Search:
        
#         def pre_resolve(self, info, **kwargs):
#             actual_user = info.context.user
#             metadata_cruddals = info.context.metadata_cruddals
#             dine_up_user = DineUpUser.objects.get(user=actual_user)
#             final_data_to_paginate = Employee.objects.filter(Q(restaurants__owner__pk=dine_up_user.pk) | Q(dine_up_user__pk=dine_up_user.pk)).distinct()

#             final_data_to_paginate = filter_by_model_fields(kwargs, final_data_to_paginate)
#             final_data_to_paginate = filter_by_advanced_search(kwargs, final_data_to_paginate)
#             final_data_to_paginate = final_data_to_paginate.distinct('dine_up_user__pk').order_by('-dine_up_user__pk')

#             metadata_cruddals.update({"final_data_to_paginate": final_data_to_paginate})
            
#             return self, info, kwargs


# class RoleInterface:

#     class List:
        
#         def pre_resolve(self, info, **kwargs):
#             actual_user = info.context.user
#             dict_filter = build_filter_data_by_user(actual_user, "restaurants__owner__pk")
#             kwargs = merge_dict(dict_filter, kwargs, overwrite=False, keep_both=True)
#             return self, info, kwargs

#     class Search:
        
#         def pre_resolve(self, info, **kwargs):
#             actual_user = info.context.user
#             metadata_cruddals = info.context.metadata_cruddals
#             dict_filter = build_filter_data_by_user(actual_user, "restaurants__owner__pk")
#             kwargs = merge_dict(dict_filter, kwargs, overwrite=False, keep_both=True)

#             final_data_to_paginate = Role.objects.all()
#             final_data_to_paginate = filter_by_model_fields(kwargs, final_data_to_paginate)
#             final_data_to_paginate = filter_by_advanced_search(kwargs, final_data_to_paginate)
#             final_data_to_paginate = final_data_to_paginate.order_by('-id').distinct('pk')

#             metadata_cruddals.update({"final_data_to_paginate": final_data_to_paginate})
            
#             return self, info, kwargs
