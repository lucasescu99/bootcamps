
const account = process.env.ACCOUNT_SID
const auth = process.env.AUTH_TOKEN
const from = process.env.TWILIO_NUMBER

const twilio = require('twilio');

const client = new twilio(account, auth);

exports.dispatchSMS = (to, body) => client.messages.create({to,body,from});
