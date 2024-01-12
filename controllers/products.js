const { Product } = require("../models/test");

const { ctrlWrapper } = require("../helpers");

const listProducts = async (req, res) => {
     const result = await Product.find();
     res.json(result);
};

const listProductBloodType = async (req, res) => {
   
  const userBloodType = req.user.groupBloodNotAllowed;
 
  const matchingProducts = await Product.find({
    [`groupBloodNotAllowed.${userBloodType}`]: true,
  });
  const nonMatchingProducts = await Product.find({
    [`groupBloodNotAllowed.${userBloodType}`]:  false ,
  });

  res.json({
    matchingProducts,
    nonMatchingProducts,
  });
};

module.exports = {
  listProducts: ctrlWrapper(listProducts),
  listProductBloodType: ctrlWrapper(listProductBloodType),
};
