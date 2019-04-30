const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const businessRoute = require('./business.route.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{userNewUrlParser: true}).then(
    ()=>(console.log('Database is Connected')),
    err=>(console.log('Cant connect to the database' + err))
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/business', businessRoute);
app.listen(PORT, function () {
    console.log('Server is running on port : ',PORT);
});