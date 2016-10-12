'use strict';

var ENDPOINT = 'locations/';

function Locations(client){
  this.client = client;
}

Locations.prototype.update = function(latitude, longitude, heading, options, cb){
  if(!cb) { cb = options; options = {}; }
  var form = Object.assign({latitude: latitude, longitude: longitude, heading: heading}, options);
  var opts = {
    url: ENDPOINT + 'update',
    form: form
  };
  this.client.post(opts, function(err, resp, body){
    if(typeof(cb) === 'function') cb(err, resp.statusCode == 200);
  });
};

Locations.prototype.delete = function(key, cb){
  if(!cb) { cb = key; key = undefined; }
  var form = {};
  if(key) form.key = key;
  var opts = {
    url: ENDPOINT + 'delete',
    form: form
  };
  this.client.post(opts, function(err, resp, body){
    if(typeof(cb) === 'function') cb(err, resp.statusCode == 200);
  });
};

module.exports = Locations;
