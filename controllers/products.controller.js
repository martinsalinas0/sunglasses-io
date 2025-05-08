const products = require("../initial-data/products.json");

const getProducts = (req, res) => {
  try {
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsByBrand = (req, res) => {
  try {
    const { brandId } = req.params;

    const filterBrands = products.filter((product) => {
      product.brandId === brandId;
      
    });
    res.status(200).json({filterBrands})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts };
