/**
 * Created by starsky on 4/24/17.
 */
let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test' || env === 'production') {
    let config = require('./config.json');
    let envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}
