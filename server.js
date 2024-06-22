const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your MongoDB Atlas connection string
const mongoURI = 'https://cloud.mongodb.com/v2/66766f791f26f0012f570196#/dataAPI';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

// Replace with your email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jaywaigankar2@gmail.com', // Replace with your email
    pass: 'JAYWAIGANKAR@1326' // Replace with your email password or app-specific password
  }
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    await newContact.save();

    const mailOptions = {
      from: email,
      to: 'jaywaigankar2@gmail.com', // Replace with your admin email
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission from:
      Name: ${name}
      Email: ${email}
      Message: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
