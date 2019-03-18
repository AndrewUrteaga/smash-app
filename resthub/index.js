
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose')
let apiRoutes = require('./routes/api')
let mongo = require('mongodb').MongoClient
let cors = require('cors')
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


 // Connect to Mongoose and set connection variable
 mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});

 var db = mongoose.connection;


 const uri = "mongodb+srv://Drew:Hopesdie2@cluster0-z92ln.mongodb.net/test?retryWrites=true";
 const client = new MongoClient(uri, { useNewUrlParser: true });
 client.connect(err => {
   const collection = client.db("Smash").collection("photos");
   // perform actions on the collection object
   
 });
 




// use API routes in app
app.use('/api', apiRoutes)

var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, () => {
     console.log("Running RestHub on port " + port);
});