const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize EmailJS with service credentials
emailjs.init('IJ-WsOevpdJ3VcNDn');

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validate form data
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const templateParams = {
      to_email: 'scitsgzbofficial@gmail.com',
      from_email: email,
      user_name: name,
      user_phone: phone,
      course: course || 'Not Specified',
      message: message,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      'service_al2ocbv',
      'template_wmv3hfe',
      templateParams
    );

    if (response.status === 200) {
      res.json({ success: true, message: 'Email sent successfully' });
    } else {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: error.message || 'Server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
