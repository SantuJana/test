const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.send('ok');
})

app.listen(8080, ()=>{
    console.log('app is listening on port 8080');
})