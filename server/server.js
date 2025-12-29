const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/send-code', (req, res) => {
    const { email, code } = req.body;

    const mailOptions = {
        from: `"CyberShield Security" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Your CyberShield Verification Code',
        html: `
      <div style="font-family: sans-serif; background-color: #050505; color: white; padding: 40px; border-radius: 12px; border: 1px solid #00ff9d;">
        <h1 style="color: #00ff9d; text-align: center;">CyberShield</h1>
        <p style="font-size: 1.1rem; text-align: center;">Identity Verification Protocol</p>
        <div style="background: rgba(255,255,255,0.05); padding: 20px; text-align: center; border-radius: 8px; margin: 30px 0;">
          <p style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 10px;">Your 6-digit access code:</p>
          <h2 style="font-size: 2.5rem; letter-spacing: 0.5rem; color: #00b8ff; margin: 0;">${code}</h2>
        </div>
        <p style="font-size: 0.8rem; opacity: 0.5; text-align: center;">
          This code will expire in 10 minutes. If you did not request this, please ignore this email.
        </p>
      </div>
    `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Failed to send email' });
        }
        console.log('Email sent: ' + info.response);
        res.json({ success: true });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Security server running on port ${PORT}`);
});
