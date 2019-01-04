require('dotenv').config()
const postmark = require("postmark");
const axios = require('axios');
// Send an email:

// 1. with npm postmark
// const client = new postmark.ServerClient(process.env.SERVER_POSTMARK);
//
// client.sendEmail({
//   "From": "info@uniform.id",
//   "To": "erwinwahyuramadhan@gmail.com",
//   "Subject": "Your Approval Has Been Approved",
//   "TextBody": "Hello from Postmark!"
// });

// 2. with api from postmark
let obj = {
    From: "info@uniform.id",
    To: "erwinwahyuramadhan@gmail.com,erwar17@gmail.com",
    Cc: "erwinwahyuramadhan@gmail.com,erwar17@gmail.com",
    Bcc: "erwinwahyuramadhan@gmail.com,erwar17@gmail.com",
    Subject: "Testing",
    Tag: "",
    TextBody: "this is message",
    ReplyTo: "",
    Metadata: {
      "Color":"blue",
      "Client-Id":"12345"
    },
    Headers: [
      {
        "Name": "CUSTOM-HEADER",
        "Value": "value"
      }
    ],
    TrackOpens: true,
    TrackLinks: "HtmlOnly"
  }
axios.post('https://api.postmarkapp.com/email', obj, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Postmark-Server-Token': process.env.SERVER_POSTMARK
  }
}).then(res => {
  console.log('success send email: ', res.data);
}).catch(err => {
  console.log('error send email: ', err);
})
