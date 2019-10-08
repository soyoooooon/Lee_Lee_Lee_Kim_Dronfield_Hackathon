const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.set('view engine','hbs');
app.set('views', path.join(__dirname + "/views"))



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + "/views"));
// })

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})