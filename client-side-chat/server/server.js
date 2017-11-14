// Get dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var file = require('file-system');
var fs = require('fs');
var cors = require('cors');

// Get our API routes
const api = require('./routes/api');

const app = express();

app.use(cors());
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/validate/:username', (req, res) => {
  if (doesUserExist(req.params.username))
    res.send(jsonUsers.find(user => user.username === req.params.username));
  else
    res.send('user doesnt exist!');
});

app.post('/validate', (req, res) => {

  if (doesUserExist(req.body.username)) {
    let tempUser = jsonUsers.find(user => user.username === req.body.username);
    if (tempUser.password === parseInt(req.body.password))
      res.send(tempUser);
    else
      send('username or password incorrect, please try again');
  }
  else
    res.send('user doesnt exist!');
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

var jsonUsers = JSON.parse(fs.readFileSync('C:\\Users\\Jbt\\WebstormProjects\\angular-team-chat-aviv\\client-side-chat\\server\\data\\users.json'), 'utf-8');

function doesUserExist(username) {
  return jsonUsers.filter(user => user.username === username).length === 1;
}

//sfsadfgsd
