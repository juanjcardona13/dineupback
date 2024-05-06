from graphene_django_cruddals_v1.utils.utils import CruddalsRelationField

class MenuItemInterface:

    class Create:
        class Meta:
            modify_input_argument = {
                "extra_fields": {
                    "images": CruddalsRelationField(),
                    "variant": CruddalsRelationField(),
                    "option_groups": CruddalsRelationField(),
                }
            }

    class Update:
        class Meta:
            modify_input_argument = {
                "extra_fields": {
                    "images": CruddalsRelationField(),
                    "variant": CruddalsRelationField(),
                    "option_groups": CruddalsRelationField(),
                }
            }

class MenuItemVariantInterface:
    class InputObjectType:
        variant_options = CruddalsRelationField()

class OptionGroupInterface:
    class InputObjectType:
        item_options = CruddalsRelationField()

