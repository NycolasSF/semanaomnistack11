const express = require('express');
const cors = require('cors'); 
const routes = require('./routes.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


const port = 3331;
app.listen(port, ()=>{
    console.log(`Listen in port: ${port}`); 
});