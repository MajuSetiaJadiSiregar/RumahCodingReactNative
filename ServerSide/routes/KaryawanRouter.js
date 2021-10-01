const router = require('express').Router();
const karyawanController = require('../controllers/KaryawanController');


router.post('/create', karyawanController.createKaryawan);
router.get('/read', karyawanController.readKaryawan);
router.put('/update/:id', karyawanController.updateKaryawan);
router.delete('/delete/:id', karyawanController.deleteKaryawan);

module.exports = router;