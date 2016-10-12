'use strict';

var request = require('request');

var ENDPOINT = 'https://locapos.com/api/';

function ApiClient(token){
  this.token = token;
}

ApiClient.prototype.get = function(options, fn){
  options.url = ENDPOINT + options.url;
  options.auth = {'bearer': this.token};
  request.get(options, fn);
};

ApiClient.prototype.post = function(options, fn){
  options.url = ENDPOINT + options.url;
  options.auth = {'bearer': this.token};
  request.post(options, fn);
};

module.exports = ApiClient;
