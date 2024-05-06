"""
Django settings for dineup project.

Generated by 'django-admin startproject' using Django 3.2.18.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-qcs(*!5$2u**o%x89&81kckesu5ej0#3o^dw_8cv!djm9oauf0'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["localhost", "127.0.0.1", "0.0.0.0", "192.168.1.17"]


# Application definition

INSTALLED_APPS = [
    'apps.accounts.apps.AccountsConfig',
    'apps.core.apps.CoreConfig',
    'apps.menu.apps.MenuConfig',
    'apps.orders.apps.OrdersConfig',
    'apps.restaurant.apps.RestaurantConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'nested_admin',
    'corsheaders',
    'graphene_django_cruddals_v1'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'apps.core.middlewares.LoadUserInRequestMiddleware'
]

ROOT_URLCONF = 'dineup.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'dineup.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'db_dine_up',
#         'USER': 'user_db_dine_up',
#         'PASSWORD': 'Contrasena1',
#         'HOST': 'localhost',
#         'PORT': '5432',
#         'OPTIONS': {},
#     }
# }

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}



# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTHENTICATION_BACKENDS = [
    "graphql_jwt.backends.JSONWebTokenBackend",
    "django.contrib.auth.backends.ModelBackend",
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

MEDIA_URL = ''
MEDIA_ROOT = os.path.join(BASE_DIR, '')

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

GRAPHENE = {
    "MIDDLEWARE": [
        "graphql_jwt.middleware.JSONWebTokenMiddleware",
    ],
}

CRUDDALS = {
    'APPS': [
        "auth",
        "core",
        "accounts",
        "menu",
        "orders",
        "restaurant",
    ],

    'INTERFACES': ["dineup.interfaces.AuthenticationInterface", "dineup.interfaces.ExcludeAuditFields"],
    'SETTINGS_FOR_APP': {
        'accounts': {
            'exclude_functions': ['list'],
            'settings_for_model': {
                'DineUpUser': {
                    'interfaces': ["apps.accounts.interfaces.DineUpUserInterface"]
                },
    #             'Role': {
    #                 'interfaces': ["apps.accounts.interfaces.RoleInterface"]
    #             },
    #             'Employee': {
    #                 'interfaces': ["apps.accounts.interfaces.EmployeeInterface"]
    #             }
            }
        },
        'restaurant': {
            'exclude_functions': ['list'],
            'settings_for_model': {
                'Restaurant': {
                    'interfaces': ["apps.restaurant.interfaces.RestaurantInterface"]
                },
    #             'Branch': {
    #                 'interfaces': ["apps.restaurant.interfaces.BranchInterface"]
    #             },
                'Table': {
                    'interfaces': ["apps.restaurant.interfaces.TableInterface"]
                },
            }
        },
        'menu': {
            'exclude_functions': ['list'],
            'settings_for_model': {
            #     'ItemImage': {
            #         'interfaces': ["apps.menu.interfaces.ItemImageInterface"]
            #     },
            #     'Menu': {
            #         'interfaces': ["apps.menu.interfaces.MenuInterface"]
            #     },
                'MenuItem': {
                    'interfaces': ["apps.menu.interfaces.MenuItemInterface"]
                },
                'MenuItemVariant': {
                    'interfaces': ["apps.menu.interfaces.MenuItemVariantInterface"]
                },
                'OptionGroup': {
                    'interfaces': ["apps.menu.interfaces.OptionGroupInterface"]
                },
            #     'Category': {
            #         'interfaces': ["apps.menu.interfaces.CategoryInterface"]
            #     }
            }
        },
        'orders': {
            'exclude_functions': ['list'],
            # 'settings_for_model': {
            #     'Order': {
            #         'interfaces': ["apps.orders.interfaces.OrderInterface"]
            #     },
            # }
        },
    }
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.1.17:3000",
]