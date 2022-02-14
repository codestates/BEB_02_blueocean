const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const indexRouter = require('./routes');


app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());

app.use('/', indexRouter);



app.listen(port, ()=> {
    console.log("listening port :" + port);
})

module.exports = app;
