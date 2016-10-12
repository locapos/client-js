'use strict';

var ApiClient = require('./lib/apiclient.js')
  , Locations = require('./lib/locations.js')
  , Groups = require('./lib/groups.js')
  , Users = require('./lib/users.js');

function LocaposClient(){
  return function(token){
    var client = new ApiClient(token);
    this.locations = new Locations(client);
    this.groups = new Groups(client);
    this.users = new Users(client);
  };
};

module.exports = LocaposClient();
