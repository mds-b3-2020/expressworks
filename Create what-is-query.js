const express = require("express");
const app = express();
const [_express,_path,port] = process.argv;

app.get('/search', (req,res)=>{
    res.send(JSON.stringify(req.query));
    
});
app.listen(port);
