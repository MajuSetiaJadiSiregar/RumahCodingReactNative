const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

   try{
      const token = req.header("Authorization");

      if(!token) res.status(400).json({msg : "Not Authorization"});

      jwt.verify(token, process.env.TOKEN, (err, user) => {
         if(err) return res.status(400).json({msg : "Not Authorization"});
         req.user = user;
         next();
      })
   }catch(error){
      console.log(error);
   }
};

module.exports = auth;