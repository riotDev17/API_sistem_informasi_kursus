import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const Transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default Transporter;
