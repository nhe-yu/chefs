const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Add this line

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


const reviews = [];

// GET route to fetch reviews
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// POST route to add a new review
app.post('/reviews', (req, res) => {
    const newComment = req.body.review;
    reviews.push(newComment);
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
