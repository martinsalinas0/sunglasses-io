const brands = require("../initial-data/brands.json");

const getBrands = (req, res) => {
  try {
    res.status(200).json({ brands: brands });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBrands };
