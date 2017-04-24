/**
 * Created by starsky on 4/22/17.
 */
const {SHA256} = require('crypto-js');
const  jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');

let password = '123abc';

// bycrypt.genSalt(10, (err, salt) => {
//     bycrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

let hashedPassword ='$2a$10$Gi8ngqbEoSdKz3zgrgAdb.5KDMfLa1BbO3gDmnaZIb0Fp5u.48cui';

bycrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});
// let data = {
//     id: 10
// };
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
// let decode = jwt.verify(token, '123abc');
// console.log(decode);
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
