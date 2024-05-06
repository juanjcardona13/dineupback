
from threading import current_thread

from django.conf import settings
from django.shortcuts import redirect
from django.utils.deprecation import MiddlewareMixin


_requests = {}


def current_request():
    global _requests
    return _requests.get(current_thread().ident, None)


class LoadUserInRequestMiddleware(MiddlewareMixin):
    def process_request(self, request):
        global _requests
        _requests[current_thread().ident] = request

    def process_response(self, request, response):
        global _requests
        _requests.pop(current_thread().ident, None)
        return response

    def process_exception(self, request, exception):
        global _requests
        _requests.pop(current_thread().ident, None)

