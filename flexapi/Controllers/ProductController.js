const Product = require('../models/Product');

exports.searchProducts = async (req, res) => {
    const { query } = req.query;
    try {
        const products = await Product.find({ name: { $regex: query, $options: 'i' } });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Error searching products' });
    }
};