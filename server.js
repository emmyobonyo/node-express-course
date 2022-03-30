const express = require('express');
const app = express();

const mockUserData = [
  { name: 'Jill'},
  { name: 'Mark' }
]

app.get('/users/:id', function(req, res){
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'Got the data. Dope',
    users: req.params.id,
  })
})

app.listen(8000, function(){
  console.log('Server is Running');
})
