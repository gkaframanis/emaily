import express from "express";

const app = express();

// The second arg which is an arrow function is being called whenever we have a request at '/'.
app.get("/", (req, res) => {
    res.send({hi: "there"});
});

// || 5000 if we are in development environment. In production, we use whatever port Heroku assigns to us.
const PORT = process.env.PORT || 5000;
// Express instructs node to hear for incoming traffic at port 5000.
app.listen(PORT);

// node index.mjs
// localhost:5000
