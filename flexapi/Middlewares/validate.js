const { body, validationResult } = require('express-validator');

const validateSignup = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

const validateLogin = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'),
];

const validateOrder = [
    body('products').isArray().withMessage('Products must be an array'),
    body('totalAmount').isNumeric().withMessage('Total amount must be a number'),
];

module.exports = { validateSignup, validateLogin, validateOrder };