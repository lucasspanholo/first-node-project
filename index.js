const express = require('express');
const res = require('express/lib/response');

const app = express();

const path = require('path');

const router = express.Router();


router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.use('/', router)

app.listen(process.env.port || 3000);

console.log('server rodando')