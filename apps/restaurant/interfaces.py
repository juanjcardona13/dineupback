from graphene_django_cruddals_v1.utils.utils import CruddalsRelationField
import graphene

import qrcode
import base64
from io import BytesIO


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


class RestaurantInterface:

    class Create:
        class Meta:
            modify_input_argument = {
                "extra_fields": {
                    "branches": CruddalsRelationField()
                }
            }

    class Update:
        class Meta:
            modify_input_argument = {
                "extra_fields": {
                    "branches": CruddalsRelationField()
                }
            }

class TableInterface:

    class ObjectType:
        qr_code = graphene.String()

        def resolve_qr_code(table, info):
            branch = table.branch
            restaurant = branch.restaurant
            #TODO: Para el absolute uri, debo de interceptar el origin o debo de ponerlo en una var global como en Nuvix
            absolute_uri = "https://localhost:3000"
            data = f"restaurant={restaurant.pk}&branch={branch.pk}&table={table.pk}"
            encoded_data = base64.b64encode(data.encode()).decode()
            url = f"{absolute_uri}/{restaurant.slug}?t={encoded_data}"
            response = generate_base64_qr(url)
            return response
