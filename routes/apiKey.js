const router=require("express").Router();
const apiKeyController=require('../controllers/apiKeyController');

router.get('/getKey', apiKeyController.getKey);

module.exports=router