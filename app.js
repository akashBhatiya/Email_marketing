const express = require('express');
const app = express();
const port = 8000 || process.env.PORT;
const path = require('path');
const db = require('./config/mongoose');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views','./views')



app.use('/', require('./routes/index'));

app.listen(port, (err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is liestening on ${port}`);

})

