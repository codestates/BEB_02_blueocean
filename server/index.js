const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const indexRouter = require('./routes');

const mongoose = require('mongoose');
const mongo_uri = process.env.MONGO_URI;

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());
app.use('/', indexRouter);


//6.0v 이상  useNewUrlParser, useUnifiedTopology 지원안함
mongoose
 .connect(mongo_uri)
 .then(()=> console.log("Successfully connected to mongodb"))
 .catch((err) => console.log(err));




app.listen(port, ()=> {
    console.log("listening port :" + port);
})

module.exports = app;
