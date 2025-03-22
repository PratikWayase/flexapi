const Order = require('../models/Order');
const User = require('../models/User');
const { sendOrderConfirmationEmail } = require('../services/orderService');

exports.placeOrder = async (req, res) => {
    const { userId, products, totalAmount, token } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const order = new Order({ user: userId, products, totalAmount, paymentStatus: 'Paid' });
        await order.save();

        user.basket = [];
        await user.save();

        await sendOrderConfirmationEmail(user.email, totalAmount);

        res.json({ message: 'Order placed successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error placing order' });
    }
};