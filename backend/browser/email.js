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
        subject: "Application for C2C Opportunity",
        text: `Dear Recruiter,

I hope you are doing well.

I came across your LinkedIn post regarding the C2C opportunity for the specified role.

Based on the job description, I believe my technical background and project experience align well with the position. Please find my resume attached for your review.

I would appreciate the opportunity to discuss my candidature further.

Thank you for your time and consideration.

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

