const express=require('express')
const router=express.Router()
const user=require('../models/user')
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt=require('bcryptjs');
const jwtsecret = ""
router.post("/createuser",body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password','invalid password').isLength({ min: 5 }),async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)
    try {
        await user.create({
            name: req.body.name,
            password:secPasswordnode,
            email:req.body.email
        })
        res.json({success:true});
    } catch (error) {
     console.log(error)  
     res.json({success:false}); 
    }
})
router.post("/login",body('email').isEmail(),body('password','invalid password').isLength({ min: 5 }),async (req,res)=>{
   let email=req.body.email;
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        let a=await user.findOne({email});
        if(!a){
            return res.status(400).json({ errors: "enter correct username" }); 
        }
        const pwdcompare=await bcrypt.compare(req.body.password,a.password)
        if(!pwdcompare){
            return res.status(400).json({ errors: "enter correct password" }); 
        }
        const data={
            user: {
                id : a.id
            }
        }
        const authToken = jwt.sign(data,jwtsecret)
        return  res.json({success:true,authToken : authToken}); 
    } catch (error) {
     console.log(error)  
     res.json({success:false}); 
    }
})
module.exports = router;
