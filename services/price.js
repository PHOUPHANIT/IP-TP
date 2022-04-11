const Prices = require("../models/prices");

const findById = async (id) =>{
  const price = await Prices.findById(id)
  return{
      success:true,
      data:price
  }
}

const create = async (newPrice) => {
  // to do
  const createdPrice = await Prices.create(newPrice);
  return createdPrice;
}
const findAll = async () => {
  // to do
  const price = await Prices.find({});
  return{
      success:true,
      data:price
  }
}

const update = async (params) => {
  // to do
  try{
    const {id, price, source} = params;
    const update= await Prices.updateOne({_id:id},{price:price, source:source});
    return {
      success: true,
      data: update
    }
  }catch(err){
    return{
      success: false,
      error: err
    }
  }
}

const remove = async (id) => {
  // to doF
  try{
    const deletePrice = await Prices.deleteOne(id);
    return {
      success: true,
      data: deletePrice
    }
  }catch(err){
    return {
      success: false,
      error: err
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
}//