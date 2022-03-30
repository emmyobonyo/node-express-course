const express = require('express');
const app = express();

const mockUserData = [
  { name: 'Jill'},
  { name: 'Mark' }
]

app.get('/users', function(req,res){
  res.json({
    success: true,
    message: 'Successfully got users. Nice',
    users: mockUserData,
  })
})

// get method also takes two arguments
// a string (path that will respond to the get function) and a function.
// listen method takes two arguments.
// a port number and a function.

app.listen(8000, function(){
  console.log('Server is Running');
})
// the listen method takes two arguments.
// port and a function.