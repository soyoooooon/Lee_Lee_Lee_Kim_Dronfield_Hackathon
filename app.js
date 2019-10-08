const express = require("express");
const hbs = require("hbs");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'));

app.set('view engine','hbs');
app.set('views', path.join( __dirname + "/views"));


// app.get('/', (req, res) => {
//     res.render('layout', { test: "Hello!"})
// })

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})