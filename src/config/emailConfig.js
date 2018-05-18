'use restrict'
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'box458.bluehost.com',
    port: 26,
    secure: false,
    auth: {
        user: 'social@plurer.com.br',
        pass: 'x<5n%2TwC:,RW{4'
    }
});
module.exports = transporter;