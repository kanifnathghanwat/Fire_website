const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kanifnathghanwat@gmail.com',
            pass: '123454321'
        }
    });

    // Email content
    const mailOptions = {
        from: 'kanifnathghanwat@gmail.com',
        to: 'kanifnathghanwat3677@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
