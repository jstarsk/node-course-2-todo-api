const mongoose = require('mongoose');
const nconf = require('nconf');

nconf.argv().env().file('keys/keys.json');

const user = nconf.get('mongoUser');
const pass = nconf.get('mongoPass');
const host = nconf.get('mongoHost');
const port = nconf.get('mongoPort');

let uri = `mongodb://${user}:${pass}@${host}:${port}`;

if (nconf.get('mongoDatabase')) {
    uri = `${uri}/${nconf.get('mongoDatabase')}`;
}

console.log(uri);

mongoose.Promise = global.Promise;
mongoose.connect(uri || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

