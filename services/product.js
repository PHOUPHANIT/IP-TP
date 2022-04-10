
const Products = require("../models/products")
var mongoose = require('mongoose');

const findById = async (id) => {
  // to do
}

const findAll = async () => {
  // to do
}

const create = async (newProduct) => {
  const createdProduct = await Products.create(newProduct);
  return createdProduct;
}

const update = async (params) => {
  // to do
  try{
    const { id, title, imageUrl, desc } = params;
    const updateProduct = await Products.updateOne({_id:id},{title:title, imageUrl:imageUrl, desc:desc});
    return {
      success: true,
      data: updateProduct
    }
  }catch(err){
    return {
      success: false,
      Error: err
    }
  }
}

const remove = async (id) => {
  // to do
  try{
    const removeProduct = await Products.deleteOne(id);
    return {
      success: true,
      data: removeProduct
    }
  }catch(err){
    return {
      success: false,
      Error: err
    }
  }

}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}