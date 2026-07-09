const nodemailer = require("nodemailer");
const path = require("path");

async function sendMail(toEmail) {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: toEmail,
        subject: "Application for Contract Developer Position",
        text: `Dear Recruiter,

I hope you are doing well.

I came across your LinkedIn post regarding the Contract Developer opportunity.

Please find my resume attached for your consideration.

Looking forward to hearing from you.

Regards,
Anushka Agarwal`,

        attachments: [
            {
                filename: "Resume.pdf",
                path: path.join(__dirname, "../uploads/Resume.pdf")
            }
        ]
    };

    await transporter.sendMail(mailOptions);

    return {
        success: true,
        message: "Email Sent Successfully"
    };
}

module.exports = {
    sendMail
};

