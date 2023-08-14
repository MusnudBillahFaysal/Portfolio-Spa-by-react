const express = require('express');
const app = express();
const mailgun = require('mailgun-js');

// Load environment variables from .env file
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

app.use(express.json());

// Your other routes...

// Email sending route
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = {
    from: 'sender@example.com', // Replace with your verified sender email in Mailgun
    to: 'recipient@example.com', // Replace with your recipient's email
    subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', body);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
