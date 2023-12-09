const express =require('express')
const userSchema= require('../models/datos')

const router= express.Router
router.post('/users',(req,res)=>{
    const user = userSchema(req.body)
    
})

module.exports = router;
  