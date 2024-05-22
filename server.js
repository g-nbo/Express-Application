const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    
    console.log("base url");
    res.render("base", );
    res.download("/guitarJpegImage.jpg")
})

app.get("/:search", (req, res) => {
    console.log("search page");
    res.render("search", req.params);
    console.log(req.body);

})

app.post("/", (req, res) => {
    const body = req.body;
    console.log(`got data: ${body.name}`);

    res.status(200).json({message: "Data looks good"})
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})