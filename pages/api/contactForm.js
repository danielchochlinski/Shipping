/* eslint-disable import/no-anonymous-default-export */
const mail = require("@sendgrid/mail");
const key = process.env.SENDGRID_API_KEY;

mail.setApiKey(key);

export default async (req, res) => {
  try {
    console.log(req.body);
    const body = JSON.parse(req.body);
    console.log(body);
    const message = `
    Name: ${body.fullName}<br/>
    Email: ${body.emailAddress}<br/>
    PhoneNumber: ${body.phoneNumber}<br/>
    Message: ${body.message}<br/>`;

    const data = {
      to: "logistics.krk.2022@gmail.com",
      from: "office@logistics.krk.2022@gmail.com",
      subject: "TRANSCOMLOGISTICS Message",
      test: message,
      html: message,
    };

    await mail.send(data);

    res.status(200).json({ status: "Ok" });
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
};
