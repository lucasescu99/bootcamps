
const mandrill = require('mandrill-api/mandrill');
const MANDRILL_KEY = process.env.MANDRILL_KEY; 

const mandrillApp = new mandrill.Mandrill(MANDRILL_KEY);

module.exports = params => (
    new Promise((resolve, reject) => (
        mandrillApp.messages.sendTemplate(params, success => resolve("success sended", success)), error => reject(error))
    )
);
