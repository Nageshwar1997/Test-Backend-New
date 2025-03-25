import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    const headers = req.headers;
    res.status(200).send("Hello world!");
});
app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
});
