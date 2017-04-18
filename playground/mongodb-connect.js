/**
 * Created by starsky on 4/18/17.
 */
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// let user = {name: 'starsky', age: 35};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     complete: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // db.collection('Users').insertOne({
    //     name: 'Starsky Lara',
    //     age: 35,
    //     location: 'Barcelona'
    // }, (err, result) => {
    //     if (err) {
    //         return 'Unable to insert User', err;
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    //
    // });

    db.close();
});
