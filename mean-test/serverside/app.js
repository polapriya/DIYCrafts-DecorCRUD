const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');
//specify where to find the schema
const Craft = require('./models/craft')
// connect and display the status 
mongoose.connect('mongodb+srv://user11:admin123@clusterdiydecor.i7pji.mongodb.net/DIY?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });


// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
app.get('/craft', (req, res, next) => {
    //call mongoose method find (MongoDB db.Students.find())
    Craft.find() 
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    
    //if error, send internal server error
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
  });

//send the array as the response  res.json(crafts)
app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
 app.use(bodyParser.json())
app.post('/craft', (req, res, next) => {

   const craft = new Craft({
   
      Fiesta: req.body.Fiesta,
      Publisher: req.body.Publisher,
      CostDetails: req.body.CostDetails,
      EquipmentRequired: req.body.EquipmentRequired,
      ImageURL: req.body.ImageURL,
      YoutubeLink: req.body.YoutubeLink
    });
    //send the document to the database 
    craft.save()
      //in case of success
      .then(() => { console.log('Success');})
      //if error
      .catch(err => {console.log('Error:' + err);}); 
   //  //sent an acknowledgment back to caller 
    res.status(201).json('Post successful');
  });
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/craft/:id", (req, res, next) => {
  Craft.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});
});
//to use this middleware in other parts of the application
module.exports=app;
