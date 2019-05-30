var express = require('express');
var app =express();

const port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/home.html');
});

app.get('/contact',function(req,res){
    res.sendFile(__dirname + '/contact.html');
});

/*    1:"max",
    2:"jack",
    3:"ryu",
    4:"han",
    5:"john"
};*/

app.get('/profile/:name',function(req,res){
    var data ={age:29, job:'teacher'};
    res.render('profile',{person: req.params.name, data:data});
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});