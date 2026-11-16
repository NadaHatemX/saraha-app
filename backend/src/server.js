const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
res.send("Saraha API is running!");
});

app.listen(port, () => {
console.log(`Saraha API is running at http://localhost:${port}`);
});
