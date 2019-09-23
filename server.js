const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product');
const mongoose = require('mongoose');
const Query =require('./core/queries')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

mongoose.connect('mongodb://vinayak:vinayak123@ds039707.mlab.com:39707/bq_mlab',{ useNewUrlParser: true })
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

