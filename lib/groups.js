'use strict';

var ENDPOINT = 'groups/';

function Groups(client){
  this.client = client;
}

Groups.prototype.join = function(cb){
  throw "NOT IMPLEMENTED";
};

Groups.prototype.new = function(cb){
  var opts = {
    url: ENDPOINT + 'new',
  }
  this.client.get(opts, function(err, resp, body){
    if(typeof(cb) === 'function') cb(err, body);
  });
};

module.exports = Groups;
