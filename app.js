// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/words', (req, res) => {
    fs.readFile('100+.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.send(JSON.parse(data));
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));