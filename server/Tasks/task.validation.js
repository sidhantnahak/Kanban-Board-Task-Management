
const { body } = require('express-validator')

exports.taskDataValidation = [

    body("title")
        .exists({ checkFalsy: true }).withMessage("Title is required")
        .isString().withMessage("Title should be string")
        .isLength({ min: 3, max: 30 }).withMessage("Title is too short"),


    body("description")
        .exists({ checkFalsy: true }).withMessage("Description is required")
        .isString().withMessage("Description should be string")
        .isLength({ min: 4 }).withMessage("Description is too short")

]