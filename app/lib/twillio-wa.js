const axios = require('axios');
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken);

// 1. appointment reminders
client.messages
      .create({
         body: 'Your appointment is coming up on July 21 at 3PM',
         from: 'whatsapp:+14155238886',
         to: 'whatsapp:+6282242361317'
       })
      .then(message => console.log(message.sid))
      .done();

// 2. order notification
client.messages
      .create({
         body: 'Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/',
         from: 'whatsapp:+14155238886',
         to: 'whatsapp:+6282242361317'
       })
      .then(message => console.log(message.sid))
      .done();
