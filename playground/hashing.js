/**
 * Created by starsky on 4/22/17.
 */
const {SHA256} = require('crypto-js');
const  jwt = require('jsonwebtoken');

let data = {
    id: 10
};

let token = jwt.sign(data, '123abc');
console.log(token);
let decode = jwt.verify(token, '123abc');
console.log(decode);
//
// let message = 'I am user number';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//     id: 4
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
// };
//
// token.data.id = 4;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// let resultHash  = SHA256(JSON.stringify(token.data) + 'someSecret').toString();
// if(resultHash === token.hash) {
//     console.log('Data was not change');
// } else {
//     console.log('Data was change. Do not trust');
// }
