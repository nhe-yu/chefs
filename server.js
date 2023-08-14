const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/get-comments", function(req, res) {
    const comments = JSON.parse(fs.readFileSync("comments.json", "utf-8"));
    res.json({ comments });
});

app.post("/add-comment", function(req, res) {
    const newComment = { name: req.body.name, comment: req.body.comment };
    const comments = JSON.parse(fs.readFileSync("comments.json", "utf-8"));
    comments.push(newComment);
    fs.writeFileSync("comments.json", JSON.stringify(comments, null, 2));
    res.json({ success: true });
});

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});
