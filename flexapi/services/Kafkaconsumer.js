const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
    const { amount, token } = req.body;

    try {
        const charge = await stripe.charges.create({
            amount: amount * 100, // Convert to cents
            currency: 'usd',
            source: token,
            description: 'E-commerce purchase',
        });

        res.json({ message: 'Payment processed successfully', charge });
    } catch (err) {
        res.status(500).json({ error: 'Error processing payment' });
    }
};