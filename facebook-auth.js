
var FacebookStrategy = require('passport-facebook').Strategy

module.exports = function (options) {

  var seneca = this

  var authPlugin = new FacebookStrategy({
      clientID:       options.appId,
      clientSecret:   options.appSecret,
      callbackURL:    options.urlhost + "/auth/facebook/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      var data = {
        identifier: '' + profile.id,
        nick: profile.displayName,
        username: profile.username,
        credentials: {
          access: accessToken,
          refresh: refreshToken},
        userdata: profile,
        when: new Date().toISOString()
      };
      done(null, data)
    }
  )

  seneca.act({role: 'auth', cmd: 'register_service', service: 'facebook', plugin: authPlugin, conf: options})

  return {
    name: 'facebook-auth'
  }
}
