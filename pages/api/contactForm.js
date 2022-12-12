/* eslint-disable import/no-anonymous-default-export */
const mail = require("@sendgrid/mail");
const key = process.env.SENDGRID_API_KEY;

mail.setApiKey(key);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Full Name: ${body.fullName}<br/>
  Info: ${body.info}<br/>`;

  const data = {
    to: "logistics.krk.2022@gmail.com",
    from: "office@translogisticscompany.com",
    subject: "TRANSCOMLOGISTICS Message",
    test: message,
    html: message,
  };

  try {
    await mail.send(data);

    res.status(200).json({ status: "Ok" });
    console.log(res);
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
};
