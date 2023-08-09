const userModel = require("../model/userModel");
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const createToken=(_id)=>{
     const jwt_key = process.env.JWT_SECRET;

     jwt.sign({_id},jwt_key,{expiresIn: "3d"})
}
const registerUser=async(req,res)=>{
    const {name,email,password} = req.body;
    try{

        let user = await userModel.findOne({email});
        if(user){
            return res.status(400).json('Email already exists!'); 
        } 
        if(!name || !email || !password){
            return res.status(400).json('All fields are required!');
        } 
        if(!validator.isEmail(email)){
            return  res.status(401).json("Invalid email address!");
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).json('Please Choose a strong Password!');
        }
    
        user = new userModel({name,email,password})
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt)
        await user.save()
    
        const token = createToken(user._id);
        res.status(200).json({_id:user._id,name,email,token})
    }catch(err){
        console.log(err)
        res.status(501).json(err.message)
    }

}

const loginUser =async(req,res)=>{
        const { email,password } = req.body;

        try{
           let user = await userModel.findOne({email})
           if(!user) return res.status(400).json('Invalid Email or Password!')
           const isValidPassword = await bcrypt.compare(password,user.password)
           if(!isValidPassword) return res.status(400).json('Invalid Email or Password!')
           const token = createToken(user._id);
           res.status(200).json({_id:user._id,name:user.name,email,token})
        }catch(err){
            console.log(err)
            res.status(501).json(err.message)
        }
}

const findUser=async(req,res)=>{
      const {userId} = req.params;
      try{
         const user = await userModel.findById(userId)
         res.status(200).json(user)
      }catch(err){
        console.log(err)
        res.status(501).json(err.message) 
      }
}
const getUsers=async(req,res)=>{
    try{
       const users = await userModel.find()
       res.status(200).json(users)
    }catch(err){
      console.log(err)
      res.status(501).json(err.message) 
    }
}

module.exports = { registerUser,loginUser,findUser,getUsers}