const Prices = require("../models/prices");

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

const update = async () => {
  // to do
}

const remove = async () => {
  // to doF
}

module.exports = {
  update,
  remove,
  findAll,
  create,
}