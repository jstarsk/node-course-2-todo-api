/**
 * Created by starsky on 4/19/17.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//    console.log(result);
// });

// Todo.findOneAndRemove().then();
Todo.findByIdAndRemove('58f77d03744543370f8833e3').then((result) => {
    console.log(result);
});
