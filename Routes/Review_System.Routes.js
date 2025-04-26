const express = require("express");
// const {create,Get_All,Get_One,Updated,deleted}=require('../Controllers/Review_SYstem.controller');
const { create, Get_One, Updated, deleted, Get_All }=require('../Controllers/Review_SYstem.controller');
const router = express.Router(); 
router.post('/',create);
router.get('/',Get_All);
router.get('/:id',Get_One);
router.put('/:id',Updated);
router.delete('/:id',deleted);

module.exports = router;