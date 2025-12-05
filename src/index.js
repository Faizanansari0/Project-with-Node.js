const express = require('express');
var bodyParser = require('body-parser');
const multer = require('multer')

const route = require('./routes/route')
const app = express();
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://fauzanansari59375_db_user:Faizanansari123@faizanashrafi.iwvsfil.mongodb.net/", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())
app.use('/', route);
app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});