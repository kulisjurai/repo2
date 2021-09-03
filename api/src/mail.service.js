const nodemailer = require("nodemailer");

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USERNAME;
const pass = process.env.SMTP_PASSWORD;

let transport = nodemailer.createTransport({
    host,
    port,
    auth: {
        user,
        pass,
    },
});

async function sendWelcomeEmail(email, name) {
    const subject = "You have successfully registered.";
    const html = `
          Dear <strong>${name}</strong>,
      <br>
      <br>
          Welcome to Globetravelers.
      <br>
      <br>
          Best,
          Globetravelers
      `;

    return await sendEmail(email, subject, html);
}

async function sendEmail(to, subject, html) {
    return transport.sendMail({
        from: '"PREVENT" <admin@prevent.io>',
        to,
        subject,
        html,
    });
}

module.exports = {
    sendWelcomeEmail,
    // sendResetPasswordRequestEmail,
    // sendResetPasswordEmail,
};

// reset password dugme ispod forme za login
// stranica sa jednim inputom za username. /reset-password-request
//stranica za potvrdu sifre (2 inputa za sifru) //reset-password?username=""
//kontroler za promjenu sifre usera {username, novaSifra}