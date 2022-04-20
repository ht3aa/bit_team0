// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { subject, message, customerEmail } = req.body;

  const nodemailer = require("nodemailer");

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      service: "gmail",
      auth: {
        user: "newcustomerforbit@gmail.com", // generated ethereal user
        pass: "hassan112233", // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: customerEmail, // sender address
      to: "bitforservices@gmail.com", // list of receivers bitforservices@gmail.com
      subject: subject + ` <${customerEmail}>`, // Subject line
      text: message, // plain text body
    });

    res.send("done");
  }

  main().catch(console.error);
}
