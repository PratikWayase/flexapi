const { getAsync, setAsync } = require('../services/redis');

const rateLimiter = async (req, res, next) => {
    const ip = req.ip;
    const key = `rate-limit:${ip}`;
    const limit = 100; // Max requests per window
    const window = 60; // Time window in seconds

    const current = await getAsync(key) || 0;
    if (current >= limit) {
        return res.status(429).json({ error: 'Too many requests' });
    }

    await setAsync(key, current + 1, 'EX', window);
    next();
};

module.exports = rateLimiter;