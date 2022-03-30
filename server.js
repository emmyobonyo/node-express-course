const express = require('express');
const app = express();

const mockUserData = [
  { name: 'Jill'},
  { name: 'Mark' }
]

app.get('/users', function(req, res){
  res.json({
    success: true,
    message: 'Got the data. Dope',
    users: mockUserData,
  })
})

app.listen(8000, function(){
  console.log('Server is Running');
})
