const nodemailer = require('nodemailer');

const EmailService = {

    sendMail() {
      let transporter = nodemailer.createTransport({
          host: process.env.smtp_host,
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: process.env.smtp_user,
              pass: process.env.smtp_password
          }
      });

      let mailOptions = {
          from: 'sysadmin@belezanaweb.com.br',
          to: 'natan.deitch@belezanaweb.com.br',
          subject: 'teste',
          text: 'teste',
          html: 'teste'
      };

      transporter.sendMail(mailOptions, (errror, info) => {
          if (error) {
              return console.log(error);
          } else {
              console.log('Message sent: %s', info.messageId);

              console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          }
      });

    }
};

module.exports = EmailService;