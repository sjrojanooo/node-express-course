//The first line gives you access to the express library by searching your node_modules for "express"
//The next creates an instance of the express constructor which we will name app 
// We we will then access methods used fo rmaking a server by including their name after app 
const express = require('express'); 
const app = express();

//This starts up the server locally on the port I gave as the argument 
// The base URL is: http://localhost:TheGCI 
app .listen(8000, function(){
    console.log("server is running")
})



