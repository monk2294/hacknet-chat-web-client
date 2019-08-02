const nodemailer = require('nodemailer');
const config = require('./config');

const mail = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
        user: config.auth.user,
        pass: config.auth.pass,
    }
});

mail.sendMail({
    from: `${config.auth.user}@${config.domain}`,
    to: config.recepients.join(', '),
    subject: config.mail.subject,
    text: config.mail.text,
});
