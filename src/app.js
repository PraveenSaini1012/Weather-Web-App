const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000

//static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("", (req,res) =>{
    res.render("index");
} )
app.get("*", (req,res) =>{
    res.render('error',{
        errorMsg : '404 error page ok'});
} )

app.listen(port , () => {
    console.log(`Listen to the port no at ${port}`)
})