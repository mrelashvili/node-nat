/* eslint-disable import/no-extraneous-dependencies */
const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSOWRD
    }
  });

  // Define the email options

  const mailOptions = {
    from: 'Giorgi Mrelashvuli <mrmrela5@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };
  // Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
