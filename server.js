var express = require('express');
var app = express();
/*
app.get('/',function(req,res){    // get request and response
    
    res.send('Hello Express');
});*/
 //about page
// about us

/*
  * Middleware
*/
//object middleware
 var middleware = {
   requireAuthentication: function(req,res,next) {
     console.log('Private route hit!!');
       next();
   },
     
  logger:function(req,res,next){
      var date=new Date().toString();
    console.log(req.method+ 'date'+ date);
      next();
  }
     
 };

app.use(middleware.logger);
app.use(middleware.requireAuthentication); // authenticate before route

app.get('/about',function(req,res){
 res.send('About Us') ;
   });

app.use(express.static(__dirname +'/public')); //express static is used to expose a folder say "public" to our site __dirname gets u to current directory

app.listen(3000,function(){
    
 console.log('express server started');   
});


/* middleware allows to run a specific function for all your apps
application level middleware runs for application and route middlewave runs only for route
*/
