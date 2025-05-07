const getProducts = (req, res) => {
  const products = require("../initial-data/products.json");

  try {
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts };
