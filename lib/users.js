'use strict';

var ENDPOINT = 'users/';

function Users(client){
  this.client = client;
}

Users.prototype.show = function(key, cb){
  if(!cb) { cb = key; key = undefined; }
  var form = {};
  if(key) form.key = key;
  var opts = {
    url: ENDPOINT + 'show',
    qs: form
  };
  this.client.get(opts, function(err, resp, body){
    if(typeof(cb) === 'function') cb(err, JSON.parse(body));
  });
};

Users.prototype.me = function(cb){
  var opts = {
    url: ENDPOINT + 'me'
  };
  this.client.get(opts, function(err, resp, body){
    if(typeof(cb) === 'function') cb(err, JSON.parse(body));
  });
};

Users.prototype.share = function(){
  var opts = {
    url: ENDPOINT + 'share'
  };
  this.client.get(opts, function(err, resp, body){
    if(typeof(cb) === 'function') cb(err, JSON.parse(body));
  });
};

Users.prototype.update = function(args, cb){
  if(!cb) { cb = args; args = {}; }
  var opts = {
    url: ENDPOINT + 'update',
    form: args
  };
  this.client.post(opts, function(err, resp, body){
    if(typeof(cb) === 'function') cb(err, resp.statusCode == 200);
  });
};

module.exports = Users;
