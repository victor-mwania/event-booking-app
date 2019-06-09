const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const events = require('./routes/events.route');
const user = require('./routes/user.route');

mongoose.connect('mongodb://victor:victor1234@cluster0-shard-00-00-vfoph.mongodb.net:27017,cluster0-shard-00-01-vfoph.mongodb.net:27017,cluster0-shard-00-02-vfoph.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true' || 'mongodb://localhost:27017/sync', { useNewUrlParser: true });

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({optionsSuccessStatus: 200}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(user);
app.use(events);
const port = process.env.PORT || 4400;
app.listen(port, ()=> {
    console.log("Listening on port "+ port);
})
