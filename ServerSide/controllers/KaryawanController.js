const Karyawan = require('../models/KaryawanModel');

const karyawanController = {

   createKaryawan : async (req, res) => {
       try
       {
           const {name, email, position, imageUrl} = req.body;
           if(!email) return res.status(400).json({msg : "email tidak boleh kosong"});

           const emailKaryawan = await Karyawan.findOne({email});
           if(emailKaryawan) return res.status(400).json({msg : "Email Sudah Ada"});

           const newKaryawan = new Karyawan({name, email, position, imageUrl});

           await newKaryawan.save();
           res.json({msg : "Berhasil Menambahkan Karyawan"})
       }
       catch(err)
       {
           return res.status(500).json({msg : err.message});
       }
   },

   readKaryawan : async (req, res) => {
       try
       {
        const  karyawans = await Karyawan.find();
        res.json({
            status : 'success',
            result : karyawans.length,
            karyawan : karyawans
        });
       }
       catch(err)
       {
           return res.status(500).json({msg : err.message});
       }
   },

   updateKaryawan : async (req, res) => {
       try
       {
           const {name, email, position, imageUrl} = req.body;
           await Karyawan.findByIdAndUpdate(
               {_id : req.params.id},
               {name, email, position, imageUrl}
           );

           res.json({msg : "Berhasil Update Karyawan"});
       }
       catch(err)
       {
           return res.status(500).json({msg : err.message});
       }
   },

   deleteKaryawan : async (req, res) => {
       try
       {
           await Karyawan.findByIdAndDelete(req.params.id);
           res.json({msg : "Berhasil Delete Karyawan"});
       }
       catch(err)
       {
           return res.status(500).json({msg : err.message});
       }
   }

};

module.exports = karyawanController;