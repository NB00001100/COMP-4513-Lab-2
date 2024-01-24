// This file will contain the artist api

const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const fs = require("fs");

app.listen(port, ()=> {
    console.log(`Server is listening at http://localhost:${port}`);
});

const jsonPath = path.join(__dirname,"data",'artists.json');

let artists = null;


fs.readFile(jsonPath, (err,data)=>{

    if(err)
    {
        console.log("something went wrong");
   
    }
    else
    {
        artists = JSON.parse(data);
    }
})

// returns artists
app.get("/api/artists", (req,resp) =>{

    
   resp.json(artists);
   
})
// gets artist based on id
app.get("/api/artists/:id", (req,resp)=>{

    const result = artists.filter( a=> a.ArtistId == req.params.id);

    if(result.length > 0){
    resp.json(results);
    }
    else{
        
        resp.json({message: " No artist were found with this ID"})
    }
})

// gets all artists based on nationality
app.get("/api/artists/nationality/:value", (req,resp) =>{

    const result = artists.filter( a=> a.Nationality == req.params.value);

    if(result.length > 0){
        resp.json(results);
        }
        else{
            
            resp.json({message: " No artist were found with this nationality"})
        }
    })

// gets all artists with same lastname
app.get("/api/artists/name/:value", (req,resp)=>{
    
    const result = artists.filter( a => a.LastName == req.params.value)

    if(result.length > 0){
        resp.json(results);
        }
        else{
            
            resp.json({message: " No artist were found with this last name"})
        }
})







