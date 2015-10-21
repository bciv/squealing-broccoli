EtherCore
---------

What is EtherCore?  It is a MEAN framework that replaces DIFR.
It uses Express version 4.x

How to get EtherCore
--------------------
```
git clone https://github.com/bciv/EtherCore.git
cd EtherCore
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

public/js/template.js defines what would be static pages
public/js/app.js defines what would be in the nav

