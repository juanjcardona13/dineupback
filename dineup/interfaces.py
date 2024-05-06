

from graphql_jwt.decorators import login_required

class ExcludeAuditFields:

    class Create:
        class Meta:
            modify_input_argument = {
                "exclude_fields": ['is_active', 'created_by', 'updated_by']
            }
    
    class Update:
        class Meta:
            modify_input_argument = {
                "exclude_fields": ['is_active', 'created_by', 'updated_by']
            }

class AuthenticationInterface:
    class Create:
        # @login_required
        def pre_mutate(*args, **kwargs):
            return (*args, kwargs)
    class Read:
        # @login_required
        def pre_resolve(*args, **kwargs):
            return (*args, kwargs)
    class Update:
        # @login_required
        def pre_resolve(*args, **kwargs):
            return (*args, kwargs)
    class Delete:
        # @login_required
        def pre_mutate(*args, **kwargs):
            return (*args, kwargs)
    class Deactivate:
        # @login_required
        def pre_mutate(*args, **kwargs):
            return (*args, kwargs)
    class Activate:
        # @login_required
        def pre_mutate(*args, **kwargs):
            return (*args, kwargs)
    class List:
        # @login_required
        def pre_resolve(*args, **kwargs):
            return (*args, kwargs)
    class Search:
        # @login_required
        def pre_resolve(*args, **kwargs):
            return (*args, kwargs)
