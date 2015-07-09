seneca-facebook-auth - a seneca-auth plugin
============================================

This plugin is used by [seneca-auth](https://www.npmjs.com/package/seneca-auth) for authenticating via facebook login.
It uses [PassportJS](http://passportjs.org). The [seneca-auth](https://www.npmjs.com/package/seneca-auth) is the
authentication plugin used by [Seneca](http://senecajs.org) toolkit.

For a gentle introduction to Seneca itself, see the [senecajs.org](http://senecajs.org) site.

If you're using this plugin module, feel to contact on twitter if you have any questions! :) [@rjrodger](http://twitter.com/rjrodger)

### Install

```sh
npm install seneca-facebook-auth
```

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
seneca action and implement your own prepareLoginData action.

 - {role: 'facebook', cmd: 'prepareLoginData'}

The JSON object provided for this actions contains following data from Facebook login:
 - accessToken
 - refreshToken
 - profile
