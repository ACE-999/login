const app=require("express")
const router =app();
const path= require("path")

const ejs = require('ejs');
 
router.engine('ejs', require('ejs').__express);
router.set('view engine','ejs');
router.set('views', './views');

const appRoute = require('./routes/routes');

router.use('/', appRoute);
router.listen(3000)
