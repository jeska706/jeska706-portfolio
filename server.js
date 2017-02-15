var express = require('express');
var app = express();
var port = 3000 || process.env.PORT;




app.use(express.static('public'));


app.listen(port, function(){
    console.log("All me on: ", port);
});
