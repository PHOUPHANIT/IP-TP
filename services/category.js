
const CategoriesSchema = require("../models/categories");
const Categories = require("../models/categories")

const findById = async (id) => {
  // to do
  try{
    const find = await Categories.findById(id);
    return {
      success: true,
      data: find
    }
  }catch(err){
      return {
         success: false,
         error: err
      }
  }
}

const findAll = async () => {
  // to do
  try{
    const findAll = await Categories.find({});
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

const findCategorizedItems = async () => {
  return await Categories.aggregate([
    {
      $lookup: {
        from: "items",
        localField: "_id",
        foreignField: "category",
        as: "items"
      }
    },
    {
      $project: {
        _id: 1,
        name: 1,
        desc: 1,
        imageUrl: 1,
        items: {
          _id: 1,
          name: 1,
          category: 1,
          desc: 1,
        }
      }
    }
  ])
}

const create = async (newCategory) => {
  // to do
  const createdCate = await Categories.create(newCategory);
  return createdCate;
}

const update = async (params) => {
  // to do
  try{
    const {id, name, desc, imageUrl} = params;
    const update= await Categories.updateOne({_id:id},{name:name, desc:desc, imageUrl:imageUrl});
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
    const deleteCate = await Categories.deleteOne(id);
    return {
      success: true,
      data: deleteCate
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
  findCategorizedItems
}