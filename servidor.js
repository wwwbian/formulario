const express= require('express');
const app= express();
const mongoose = require('mongoose');
const path = require('path')
const ejs = require('ejs')
const port= 3000
const userRoutes= require('./routes/user')
app.use('/api',userRoutes)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
app.get('/', (req, res) => {
    res.render('index', { message: 'Formulario' });
});


app.listen(port, () => {
    console.log('hola, el servidor anda');
  });