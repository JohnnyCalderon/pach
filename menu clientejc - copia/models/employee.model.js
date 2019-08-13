const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: 'This field is required.'
    },
    descripcion: {
        type: String
    },
    celular: {
        type: String
    },
    lugar: {
        type: String
    }
});



mongoose.model('Employee', employeeSchema);