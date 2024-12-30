const express = require('express');
const app = express();
const port = 3000;
const usermodel = require('./model/user.model');
const cookieParser = require('cookie-parser');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());



app.get('/', (req, res) => {
    res.render('index');    
});

app.post("/register", async (req, res) => {
    let { username, name, age, email, password } = req.body;
    let user = await usermodel.findOne({ email: email }); // Corrected method name
    // if (user) {
    //     res.status(500).send("user already exists");
    // }
    res.send();
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});








