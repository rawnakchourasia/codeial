const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');

//Accessing the home from controller
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));

module.exports=router;