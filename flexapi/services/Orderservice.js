const nodemailer = require('nodemailer');

const sendOrderConfirmationEmail = async (email, totalAmount) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Order Confirmation',
        text: `Your order has been placed successfully. Total amount: $${totalAmount}`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendOrderConfirmationEmail };