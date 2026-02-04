import { body, param, validationResult } from "express-validator";

export function validationHandler(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

export const validateId = [
  param("id").isInt().withMessage("ID must be a number."),
  validationHandler
];

export const validateText = [
  body("text").exists().withMessage("Text is required").isLength({ min: 50, max: 200 }).withMessage("Text must between 50 and 200 characters."),
  validationHandler
];

