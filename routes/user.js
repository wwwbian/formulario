const express =require('express')
const userSchema= require('../models/datos')

const router= express.Router
router.post('/users',(req,res)=>{
    res.send('crear user')
})

module.exports = router;
  