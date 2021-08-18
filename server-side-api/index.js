const express = require('express')
const app = express();
const PORT = 3001;
const fs = require('fs')
const path = require('path')
const pathToFile = path.resolve('./data.json')
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));

const getResources =()=> JSON.parse(fs.readFileSync(pathToFile))

app.get('/api/resources',(req,res)=>{
    res.send(getResources())
})


app.listen(PORT, ()=>{
    console.log(`Server is litening to port ${PORT}`)
})
