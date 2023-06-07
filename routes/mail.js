const router=require("express").Router();
const mailController=require('../controllers/mailController');

router.post('/sendMail', mailController.sendMail);

module.exports=router