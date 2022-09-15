var express = require('express');
var loginController=require('../controllers/loginController')
var router = express.Router()
var bodyParser=require('body-parser')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/', loginController.loginForm )
router.get('/login', loginController.loginForm )
router.post('/checkLoginData', loginController.checkLoginData)


module.exports = router;