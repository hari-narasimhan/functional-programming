var Promise = require('bluebird');

var fs = require('fs');

Promise.promisifyAll(fs);

fs.readFileAsync('LICENSE', 'utf-8')
  .then(function (data) {
    console.log(data);
  });

fs.readFileAsync('nofile', 'utf-8')
  .then(function (data) {
    console.log(data);
  },

  function (error) {
    console.log('Could not read "nofile"', error);
  });
