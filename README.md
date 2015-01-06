ZF2 Skeleton Application with Ember.js
======================================

Introduction
------------
This is a simple, skeleton application using the ZF2 MVC layer and module
systems and Ember.js framework.

Installation
------------

The recommended way to  install is using composer.

**1**. vendor dependency
```shell
  $  git clone https://github.com/samsonasik/zfember.git
  $  cd zfember
  $  curl -s https://getcomposer.org/installer | php --
  $  php composer.phar install
```

**2**. js dependency
```shell
  $ bower install
```

Web Server Setup
----------------

### PHP CLI Server

The simplest way to get started if you are using PHP 5.4 or above is to start the internal PHP cli-server in the root directory:

    php -S 0.0.0.0:8080 -t public/ public/index.php

This will start the cli-server on port 8080, and bind it to all network
interfaces.

**Note: ** The built-in CLI server is *for development only*.

### Apache Setup

To setup apache, setup a virtual host to point to the public/ directory of the
project and you should be ready to go! It should look something like below:

    <VirtualHost *:80>
        ServerName zfember.localhost
        DocumentRoot /path/to/zfember/public
        SetEnv APPLICATION_ENV "development"
        <Directory /path/to/zfember/public>
            DirectoryIndex index.php
            AllowOverride All
            Order allow,deny
            Allow from all
        </Directory>
    </VirtualHost>
