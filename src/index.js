const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ranjan:e91pDMx03Sx9wB2V@cluster0.u4idw.mongodb.net/rakesh9647-DB",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

let globalMiddleware = function(req,res,next){
    let currentDate = new Date ()
    let request =req
    let date = currentDate.getDate()
    let month =currentDate.getMonth() +1
    let year =currentDate.getFullYear()
    let hour =currentDate.getHours()
    let minutes =currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    let formattedDate =year + "-" + month + "-" + date + "-" + hour + ":" + minutes + ":" + seconds 
    let url =req.originalUrl
    let ip =req.ip
    let result = formattedDate + "," + "," + url

    console.log(result)
    next();
}




app.use(globalMiddleware);
app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
