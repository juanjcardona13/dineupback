import graphene
import graphql_jwt



class AuthMutations( graphene.ObjectType ):
    verify_token = graphql_jwt.Verify.Field()
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    refresh_token = graphql_jwt.Refresh.Field()


