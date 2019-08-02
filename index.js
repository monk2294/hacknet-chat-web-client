const nodemailer = require('nodemailer');
const config = require('./config');

const mail = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: false,
    auth: {
        user: config.auth.user,
        pass: config.auth.pass,
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

mail.sendMail({
    from: `${config.auth.user}@${config.domain}`,
    to: config.recepients.join(', '),
    subject: config.mail.subject,
    text: config.mail.text,
});
