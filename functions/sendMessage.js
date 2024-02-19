
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);


async function sendDailyMessage(body) {
    const message = await client.messages.create({
      body: body,
      to: '+18068818432',  
      from: twilioNumber
    });

    console.log(`Message sent: ${message.sid}`);
}


module.exports = { sendDailyMessage };