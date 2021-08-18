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
app.use(express.json())

const getResources =()=> JSON.parse(fs.readFileSync(pathToFile))

app.get('/api/resources',(req,res)=>{
    res.send(getResources())
})

app.post('/api/resources',(req,res)=>{
    const resources = getResources();
    const resource = req.body;
    resource.createdAt = new Date();
    resource.status = "inactive";
    resource.id = Date.now().toString();
    // resources.push(resource)
    resources.unshift(resource)
    fs.writeFileSync(pathToFile,JSON.stringify(resources,null,2), (err)=>{
        if(err){
            return res.status(422).send("Cannot store data in the file!");
        }
        return res.send("Data has been saved!");
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is litening to port ${PORT}`)
})
