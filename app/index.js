require('dotenv').config()
const postmark = require("postmark");

// Send an email:
const client = new postmark.ServerClient(process.env.SERVER_POSTMARK);

client.sendEmail({
  "From": "info@uniform.id",
  "To": "info@uniform.id",
  "Subject": "Your Approval Has Been Approved",
  "TextBody": "Hello from Postmark!"
});
