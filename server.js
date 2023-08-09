const express = require('express');
const cors = require('cors');
const app = express();
const mailgun = require('mailgun-js');

// Load environment variables from .env file
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const mg = mailgun({
  apiKey: process.env.28e9457d-aca2aac3,
  domain:
    process.env.app.mailgun.com /
    app /
    sending /
    domains /
    sandbox333267028f674673b892c1f7df2e2576.mailgun.org,
});

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
// Your other routes...

// Email sending route
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = {
    from: 'sender@example.com', // Replace with your verified sender email in Mailgun
    to: 'faysal@jsencoder.com', // Replace with your recipient's email
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
