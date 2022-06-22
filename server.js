const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
  });


app.get("/get", function  (req, res) {
    res.send("<h1>Hello World</h1>");
});

app.post("/post", function  (req, res) {
    let message = req.body.message;
    res.send({
        message: message
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
