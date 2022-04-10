const Items = require("../models/items");

const findById = async (id) => {
  try {
    return {
      success: true,
      data: {}
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async () => {
  // to do
  try{
    const findAll = await Items.find({});
    return{
      success: true,
      data: findAll
    }
  }catch(err){
    return{
      success: true,
      erorr: err
    }
  }
}

const create = async (newItem) => {
  // to do
  const createdItem = await Items.create(newItem);
  return createdItem;
}

const update = async (params) => {
  // to do
  try{
    const {id, name, category, desc} = params;
    const update= await Items.updateOne({_id:id},{name:name, category:category, desc:desc});
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
  // to do
  try{
    const deleteItem = await Items.deleteOne(id);
    return {
      success: true,
      data: deleteItem
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
}