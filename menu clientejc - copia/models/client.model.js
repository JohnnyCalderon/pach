 const mongoose = require('mongoose');




 var clientPath = new mongoose.Schema({
   asunto: {
       type: String
   },
   descripcion: {
    type: String
} ,
fechaInicio:{
    type: Date
}  
 });
 mongoose.model('Client',clientPath)