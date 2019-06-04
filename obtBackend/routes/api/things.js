const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({"module":"things"});
});
//JSon 

var thingsCollection =[];
var thingsStruct = {
    "id":0,
    "descripcion":'', 
    "fecha": 0, 
    "by":'',
};
thingsCollection.push(
    Object.assign(thingsStruct,{ "id":"1", "descripcion":"Mi primer thing", "Fecha":Date.getTime(), "by":"Luis"}));

);
//Crud Crear, Leer, Read, Eliminar, Update
//Rest 
//Get consultas Read, Lectura
//Post Crear -Insert C
//Put Update -Actualizar
//Delete Delete = Borrar

router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thinsStruct, 
        req.body,
         {"fecha": new Date().getTime(), 
         "id":"Luis"
         });
   
   thingsColeection.push(newElement);
    res.status(200).json({newElement});
});
router.put('/', (req, res, next)=>{
    res.status(200).json({"msg":"Entro en el put"});
});
router.delete('/', (req, res, next)=>{
    res.status(200).json({"msg":"Entro en el delete"});
});
module.exports = router;