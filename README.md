Squealing-Broccoli
------------------

What is Squealing Broccoli?  It is not the repository you are looking for.

Basically, I'm turing through different boilerplates and messing around trying to get what I want to work which 
will hopefully be:

A boilerplate that uses Bootstrap 3.x, Express 4.x, Latest Backbone, Marionette, RequireJS, etc... you know, not 
a three year old place to start...

It uses the stuff shown in bower.json and package.json respectively.
Public is client, server.js and other folders are for server-side using mongodb.

How to get Squealing Broccoli
-----------------------------
Not sure why you wouldn't just visit your local grocery store but, if you must...
```
git clone https://github.com/bciv/squealing-broccoli.git
cd squealing-broccoli
```

Install in Virtual Box using Vagrant
------------------------------------

```
vagrant up
```

~To have the virtual machine on available on your local network, edit
the Vagrantfile lines like this:

```
  config.vm.network "public_network"
  # config.vm.network "forwarded_port", guest: 443, host: 8081
```

Upon boot, you will be prompted by Vagrant to choose what interface to
bridge networking on.

Connect to the box once it has been provisioned and install the dependencies...
```
vagrant ssh
cd /vagrant
npm install
node server.js
```

Install under Mac OS X
----------------------

Install HomeBrew
```ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

Install MongoDB
```brew install mongod```

=Client Side

public/js/template.js defines what would be static pages (not yet...)
public/js/app.js defines what would be in the nav (also a blatant lie...)

