var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const priceService = require('../services/price');

router.get('/id/:id',auth.ensureSignedIn, async function(req,res,next){
  const {id} = req.params
  const result = await priceService.findById(id)
  res.json(result)
})

router.post('/create', auth.ensureSignedIn, async (req, res) => {
  const { product, price, source } = req.body;
  const result = await priceService.create({ product, price, source })
  res.json(result);
})

// all itens
router.get('/all', auth.ensureSignedIn, async (req, res) => {
  res.json(await priceService.findAll({}));
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const updatePrice = await priceService.update(req.body);
  res.json(updatePrice);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const result = await priceService.remove(req.body);
  res.json(result);
})

module.exports = router