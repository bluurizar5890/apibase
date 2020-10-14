const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
    auth: {
      user: 'urizarcode@gmail.com',
      pass: 'Blopez$1991'
    }
  });

  var mailOptions = {
    from: 'urizarcode@gmail.com',
    to: null,
    subject: null,
    text: null,
    html: null,
  };

 const sendMail = async (destinatario, asunto, texto, html) => {
     console.log('entre');
     mailOptions.to = destinatario;
     mailOptions.subject = asunto;
     mailOptions.text = texto;
     mailOptions.html = html;

     let resp= await transporter.sendMail(mailOptions);
     console.log(resp);
     return resp;
 } 
 

 module.exports = {
    sendMail
 }
  