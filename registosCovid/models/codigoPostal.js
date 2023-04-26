var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var ZipCodeSchema =  new Schema({
    cod_postal: {type: Number, unique:true}, 
    localidade: {type: String}
})

module.exports = mongoose.model('zipcode', ZipCodeSchema)
// modelo de mongoose ( nome do modelo, modelo em si )