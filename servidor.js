const express= require('express');
const app= express();
const mongoose = require('mongoose');
const port= 3000

//Conectar MongoDB
mongoose.connect('mongodb+srv://bdiaz:unodostres@clusterr.xffnu0h.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log('Conexion exitosa')
})
.catch((err) =>{
    console.error('error al conectar el servidor :'+err) 
});
  
app.listen(port, () => {
    console.log('hola, el servidor anda');
  });