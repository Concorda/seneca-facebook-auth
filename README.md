![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
seneca-facebook-auth - a seneca-auth plugin
============================================

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Dependency Status][david-badge]][david-url]
[![Gitter chat][gitter-badge]][gitter-url]

Lead Maintainer: [Mircea Alexandru](https://github.com/mirceaalexandru)

This plugin is used by [seneca-auth](https://www.npmjs.com/package/seneca-auth) for authenticating via facebook login.
It uses [PassportJS](http://passportjs.org). The [seneca-auth](https://www.npmjs.com/package/seneca-auth) is the
authentication plugin used by [Seneca](http://senecajs.org) toolkit.

For a gentle introduction to Seneca itself, see the [senecajs.org](http://senecajs.org) site.

If you're using this plugin module, feel to contact on twitter if you have any questions! :) [@rjrodger](http://twitter.com/rjrodger)

### Install

```sh
npm install seneca-facebook-auth
```

## About

seneca-rabbitmq-transport's source can be read in an annotated fashion by,

- running `npm run annotate`
- viewing [online](http://htmlpreview.github.com/?https://github.com/senecajs/seneca-facebook-auth/doc/facebook-auth.html).



The annotated source can be found locally at [./doc/facebook-auth.html]().

### Using Facebook Auth

When using seneca-auth the facebook auth must be initialized using:

```
..........
    service: {
      "local": {},
      "facebook" : {
        "appId" : "your app id",
        "appSecret" : "app secret",
        "urlhost" : "server host",
        "serviceParams": {
          "scope" : [
            "email"
          ]
        }
      }
    }
..........

```

Note: serviceParams can be used to pass any other parameter to the passport facebook strategy. For example scope can be
used to request special access permissions to user data at login time. More information can be found in the Facebook documentation.

## Other information

There is provided a default seneca action that will prepare user data to a more convenient structure.
If this data structure is not matching the expected user data structure used by your application, you can overwrite the
seneca action and implement your own facebook_login_data action.

 - {role: 'facebook', prepare: 'facebook_login_data'}

The JSON object provided for this actions contains following data from Facebook login:
 - accessToken
 - refreshToken
 - profile

## Contributing
 The [Senecajs org](https://github.com/senecajs/) encourage open participation. If you feel you can help in any way, be it with
 documentation, examples, extra testing, or new features please get in touch.

## License
 Copyright Mircea Alexandru and other contributors 2015, Licensed under [MIT][].

 [npm-badge]: https://badge.fury.io/js/seneca-local-auth.svg
 [npm-url]: https://badge.fury.io/js/seneca-local-auth
 [david-badge]: https://david-dm.org/mirceaalexandru/seneca-local-auth.svg
 [david-url]: https://david-dm.org/mirceaalexandru/seneca-local-auth
 [gitter-badge]: https://badges.gitter.im/senecajs/seneca.png
 [gitter-url]: https://gitter.im/senecajs/seneca
 [travis-badge]: https://travis-ci.org/mirceaalexandru/seneca-local-auth.svg
 [travis-url]: https://travis-ci.org/mirceaalexandru/seneca-local-auth
 [MIT]: ./LICENSE
