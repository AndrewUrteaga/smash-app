
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose')
let apiRoutes = require('./routes/api')
let mongo = require('mongodb').MongoClient
let cors = require('cors')
let config = require('./config/config')


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', apiRoutes)
app.use(function(err, req, res, next) {
  if (err) {
    console.log(err.message)
    res.status(500).send(err )
  }
});


const uri = 'mongodb+srv://aurte002%40gmail.com:Hopesdie2%21@cluster0-z92ln.mongodb.net/test?retryWrites=true'

//  // Connect to Mongoose and set connection variable
//  mongoose.connect(uri, { useNewUrlParser: true});

//  var db = mongoose.connection

//  db.on('connected', function() {
//    console.log("connected to db!!!!!!!!!!!!!")
//  });
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);
   // perform actions on the collection object
  
// use API routes in app
var port = config.port;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, () => {
     console.log("Running Smash at port " + port);
});