const nodemailer = require('nodemailer');



// var mailOptions = {
//   from: 'urizarcode@gmail.com',
//   to: null,
//   subject: null,
//   text: null,
//   html: null,
// };

const sendMail = async (config,destinatario, asunto, texto, html) => {
  const transporter = nodemailer.createTransport({
    host:config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user:config.user,
      pass:config.pass
    }
  });
  let mailOptions={};
  mailOptions.from=config.user,
  mailOptions.to = destinatario;
  mailOptions.subject = asunto;
  mailOptions.text = texto;
  mailOptions.html = html;

  let resp = await transporter.sendMail(mailOptions);
  console.log(resp);
  return resp;
}


module.exports = {
  sendMail
}
