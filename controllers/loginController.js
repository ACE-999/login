
var express = require('express');
var bodyParser = require('body-parser')
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports={
 
   loginForm:function(req, res) {
    res.render("login/app-login") 
},

checkLoginData:function(req,res){
    res.render("login/app-login",res.body)
}

}