import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
DEBUG = True
TEMPLATE_DEBUG = DEBUG
DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.sqlite3',
       'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
   }
}
ALLOWED_HOSTS = ['127.0.0.1']
STATIC_ROOT = ""