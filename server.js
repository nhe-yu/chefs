const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

let reviews = [];

function readReviewsFromFile() {
    try {
        const data = fs.readFileSync('reviews.json', 'utf8');
        reviews = JSON.parse(data);
    } catch (err) {
        console.error('Error reading reviews.json:', err);
        reviews = []; //reviews arr fallback, appears to be defaulting to this.
    }
}

function saveReviewsToFile() {
    const data = JSON.stringify(reviews, null, 2);
    fs.writeFileSync('reviews.json', data, 'utf8');
}

app.get('/reviews', (req, res) => {
    res.json(reviews);
});

app.post('/reviews', (req, res) => {
    console.log('Received review data:', req.body); // Debugging log new username and review
    const newReview = {
        username: req.body.username,
        review: req.body.review
    };
    reviews.push(newReview);
    console.log('Updated reviews array:', reviews); // Debugging log new array
    saveReviewsToFile();
    res.sendStatus(201);
});

app.post('/clear-reviews', (req, res) => {
    reviews = [];
    saveReviewsToFile();
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    readReviewsFromFile(); // Call readReviewsFromFile() here, after defining routes
});
