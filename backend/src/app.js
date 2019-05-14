const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const events = require('./routes/events.route');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({optionsSuccessStatus: 200}));

mongoose.connect(process.env.MONGOLAB_CRIMSON_URI ||'mongodb://localhost:27017/pandora', { useNewUrlParser: true });

app.use(events);
app.listen(3000, ()=> {
    console.log("Listening on port "+ 3000);
})