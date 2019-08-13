const express = require('express')
var router = express.Router();
const mongoose = require('mongoose');
const Client = mongoose.model('Client')


router.get('/',(req,res)=>{
    res.render("client/addOrEdit",{
        viewTitle : "Insert Cliente"
    })
});

router.post('/',(req,res)=>{
    InsertRecord(req,res);
});
function InsertRecord(req,res){
  var client = new Client();
  client.asunto = req.body.asunto;
  client.descripcion = req.body.descripcion;
  client.fechaInicio = req.body.fechaInicio;
  client.save((err, doc) =>{
      if(!err)
      res.redirect('client/list');
      else{
          console.log('err mijo '+ err)
      }
  });
}

router.get('/',(req,res)=>{
    res.json('from list')
});

module.exports = router;