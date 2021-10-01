const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userControllers = {
   
   register : async (req, res) => {
      try {
         const {name, email, password} = req.body;

         const userEmail = await User.findOne({email});

         if(userEmail) return res.status(400).json({msg : "Email Sudah di Gunakan"});

         if(password.length < 7) return res.status(400).json({msg : "Password Harus Lebih dari 6"});
         
         const passwordHash = await bcrypt.hash(password, 10);

         const newUser = new User({name, email, password : passwordHash});

         await newUser.save();

         res.json({msg : "Register Success !!!, Silahkan Login..."});
      }catch(err){
         return res.status(500).json({msg : err.message})
      }
   },

   login : async (req, res) => {
      try{
         const {email, password} = req.body;

         const user = await User.findOne({email});

         if(!user) return res.status(400).json({msg : "email belum terdaftar"});

         const isMatchPassword = await bcrypt.compare(password, user.password);
         if(!isMatchPassword) return res.status(400).json({msg : "Password Salah"});

         const token = jwt.sign({id : user._id}, process.env.TOKEN, {expiresIn : '1d'})

         res.json({user : user, token : token});
      }catch(err){
         return res.status(500).json({msg : err.message});
      }
   },

   getUser : async (req, res) => {
      try{
         const user = await User.findById(req.user.id).select('-password');
         if(!user) return res.status(400).json({msg : "User Tidak Ada"});
         res.json(user);
      }catch(err){
         return res.status(500).json({msg : err.message});
      }
   }
};
module.exports = userControllers;