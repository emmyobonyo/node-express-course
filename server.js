const express = require('express');
const app = express();

app.listen(8000, function(){
  console.log('Server is Running');
})
// the listen method takes two arguments.
// port and a function.