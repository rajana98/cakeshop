const { Router } = require('express');
const app = Router();

const emailController=require("../controllers/emailController")

app.post('/mail', async(req,res)=>{
    const {email}=req.body
    console.log(email)
    try {
        const sent_to=email
        const sent_from= process.env.EMAIL_USER
        const reply_to=email
        const subject="Nodemailer Test"
        const message=`
        <h3>Hello from nodemailer</h3>
        <p>Thanks for your kind support</p>
        <p>Regards...</p>`

        await emailController.sendEmail(subject, message, sent_to, sent_from, reply_to);
        res.status(200).json({ success: true, message: "Email sent",email });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error sending email" });
      }
    });

module.exports = app;

