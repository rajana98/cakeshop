const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, sent_to, sent_from, reply_to) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: sent_from,
    to: sent_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err)
    }
    else{
        console.log(info)
    }
  })
  
};

exports.sendEmail=sendEmail
