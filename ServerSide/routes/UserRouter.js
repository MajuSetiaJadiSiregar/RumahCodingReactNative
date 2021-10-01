const router = require('express').Router();
const userControllers = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
router.get('/info',auth, userControllers.getUser);

module.exports = router;