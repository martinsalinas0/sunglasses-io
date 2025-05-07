const express = require('express'); 
const { getBrands } = require('../controllers/brands.controller');
const router = express.Router(); 


router.get('/brands', getBrands)

module.exports = router; 