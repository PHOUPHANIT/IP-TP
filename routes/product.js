var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();

const productService = require('../services/product');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await productService.findById(id);
  res.json(result);
})

// all
router.get('/all', async (req, res) => {
  const result = await productService.findAll();
  res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res,) => {
  const { title, category, item, user, imageUrl, desc, } = req.body;

  const result = await productService.create({
    title,
    category,
    item,
    user,
    imageUrl,
    desc,
  })
  res.json(result);
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
    const updateProduct = await productService.update(req.body);
    res.json(updateProduct);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const result = await productService.remove(req.body);
  res.json(result);
})

module.exports = router