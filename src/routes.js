const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authControler');

router.get('/', homeController.getHomePage)
router.get('/404', homeController.getErrorPage)

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/logout', authController.getLogout);


router.all("*", (req, res) =>{
    res.render('404');
})

//TODO: Routes

module.exports = router;