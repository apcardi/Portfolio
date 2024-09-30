const express = require('express');
const path = require('path'); // This helps to construct file paths
const app = express();
const port = 3001;

// Middleware to parse incoming form data (for handling form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.) from the "public" folder
app.use(express.static('public'));

// Route to serve the homepage (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle contact form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    res.send('Thank you for your message!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});