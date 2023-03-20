const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user:process.env.NM_GMAIL,
        pass:process.env.NM_PASSWORD
    },
});

module.exports = transporter;