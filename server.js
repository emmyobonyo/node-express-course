const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [
  { name: 'Jill'},
  { name: 'Mark' }
] // this must be our API.

app.get('/users/:id', function(req, res){
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'Got the data. Dope',
    users: req.params.id,
  })
})

app.post('/login', function(req, res){
  // Passwords are encrypted before sending to the data base.
  const username = req.body.username;
  const password = req.body.password;

  //This should come from the database
  const mockUserName = 'billyTheKid';
  const mockUserPassword = 'superSecret';

  if(username === mockUserName && password == mockUserPassword) {
    res.json({
      success: true,
      message: 'Password and username match',
      token: 'encrypted token goes here',
    })
  } else {
    res.json({
      success: false,
      message: 'password and username do not matcj'
    })
  }
})

app.listen(8000, function(){
  console.log('Server is Running');
})

/* GET requests get something from the server (API) */
