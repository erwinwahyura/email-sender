const AWS = require('aws-sdk');
AWS.config.update({
  region:'us-east-1',
  accessKeyId: process.env.ACCESS_ID,
  secretAccessKey: process.env.ACCESS_SECRET_KEY
});

var ses = new AWS.SES({
  "Version":"2012-10-17",
  "Statement":[
    {
      "Effect":"Allow",
      "Action":[
        "ses:*"
      ],
      "Resource":"*"
    }
  ],
  accessKeyId: process.env.ACCESS_ID,
  secretAccessKey: process.env.ACCESS_SECRET_KEY
});


 const params = {
  Destination: {
   BccAddresses: [],
   CcAddresses: [],
   ToAddresses: ["info@uniform.id"]
  },
  Message: {
   Body: {
    Html: {
     Charset: "UTF-8",
     Data: "This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>."
    },
    Text: {
     Charset: "UTF-8",
     Data: "This is the message body in text format."
    }
   },
   Subject: {
    Charset: "UTF-8",
    Data: "Test email using AWS SES"
   }
  },
  Source: "info@uniform.id",
 };
 ses.sendEmail(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
