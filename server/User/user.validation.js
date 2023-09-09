
const { body } = require('express-validator')

exports.userDataValidation = [

    body("name")
        .exists({ checkFalsy: true }).withMessage("User name is required")
        .isString().withMessage("User name should be string")
        .isLength({ min: 3, max: 30 }).withMessage("name is too short"),


    body("address")
        .exists({ checkFalsy: true }).withMessage("address is required")
        .isString().withMessage("address should be string")
        .isLength({ min: 5, max: 150 }).withMessage("address is too short")

]