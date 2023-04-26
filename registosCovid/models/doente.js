var mongoose=require('mongoose');
var zipcode=require('./codigoPostal')
var Schema = mongoose.Schema;

var DoenteSchema =  new Schema({
    id_paciente: {type: Number, unique:true}, 
    name: {type: String},
    data_nascimento: {type: Date},
    genero: {type: String},
    zipcode: {type: zipcode}
})

module.exports = mongoose.model('zipcode', DoenteSchema)
// modelo de mongoose ( nome do modelo, modelo em si )