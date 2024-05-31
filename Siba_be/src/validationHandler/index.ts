import { NextFunction, Request, Response } from 'express';
/*
  ---- EXPRESS VALIDATOR ----
  Express-validator is a library that can be used to validate the data
  coming from the frontend or other client
  https://express-validator.github.io/docs/
*/
import {
  Result,
  ValidationChain,
  ValidationError,
  body,
  check,
  validationResult,
} from 'express-validator'; // import { body, validationResult } ???

import { validationErrorHandler } from '../responseHandler/index.js';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const validationResults: Result<ValidationError> = validationResult(req);

  if (!validationResults.isEmpty()) {
    validationErrorHandler(req, res, 'Validation', validationResults);
    return;
  } else {
    next();
  }
};

export const timeFormatString: string = '%H:%i'; // 23:25
export const timestampFormatString: string = '%a %x-%m-%d %H:%i","fi_FI';
// "Wed 2023-12-27 23:59"

// Common validator chain objects for: id, name, description, priority
export const createIdValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .matches(/^[0-9]+$/)
    .withMessage(`${fieldName} must be a number`)
    .bail()
    .notEmpty()
    .withMessage(`${fieldName} cannot be empty`)
    .bail(),
];

export const createNameValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .isLength({ min: 2, max: 255 })
    .withMessage(`${fieldName} must be between 2-255 characters long`)
    .bail()
    .matches(/^[A-Za-zäöåÄÖÅ0-9\(\)\s\/,-]*$/)
    .withMessage(`${fieldName} must contain only letters, numbers and -`)
    .bail()
    .trim()
    .notEmpty()
    .withMessage(`${fieldName} cannot be empty`)
    .bail(),
];

export const createDescriptionValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .isLength({ max: 16000 })
    .withMessage(`${fieldName} can be at maximum 16000 characters long`)
    .bail()
    .matches(/^[A-Za-zäöåÄÖÅ0-9\(\)\s\/,.:-]*$/)
    .withMessage(`${fieldName} must contain only letters, numbers and -`)
    .bail(),
];

export const createDescriptionValidatorChainObl = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .isLength({ min: 2, max: 16000 })
    .withMessage(`${fieldName} can be at maximum 16000 characters long`)
    .bail()
    .matches(/^[A-Za-zäöåÄÖÅ0-9\(\)\s\/,.:-]*$/)
    .withMessage(`${fieldName} must contain only letters, numbers and -`)
    .bail()
    .trim()
    .notEmpty()
    .withMessage(`${fieldName} cannot be empty`)
    .bail(),
];

export const createNumberValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .matches(/^[0-9]+$/)
    .withMessage(`${fieldName} must be a number`)
    .bail()
    .notEmpty()
    .withMessage('Cannot be Empty')
    .bail(),
];

export const createNumberCountNonZeroIntegerValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .matches(/^[1-9][0-9]*$/)
    .withMessage(`${fieldName} must be positive integer 1-999999 or so`)
    .bail()
    .notEmpty()
    .withMessage('Cannot be Empty')
    .bail(),
];

export const createMultiNumberValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  body(`*.${fieldName}`)
    .matches(/^[0-9]+$/)
    .withMessage(`${fieldName} must be a number`)
    .bail()
    .notEmpty()
    .withMessage('Cannot be Empty')
    .bail(),
];

export const createMultiNameValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  body(`*.${fieldName}`)
    .isLength({ min: 2, max: 255 })
    .withMessage(`${fieldName} must be between 2-255 characters long`)
    .bail()
    .matches(/^[A-Za-zäöåÄÖÅ0-9\s/,-]*$/)
    .withMessage(`${fieldName} must contain only letters, numbers and -`)
    .bail()
    .notEmpty()
    .withMessage(`${fieldName} cannot be empty`)
    .bail(),
];

export const createMultiDescriptionValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  body(`*.${fieldName}`)
    .isLength({ max: 16000 })
    .withMessage(`${fieldName} can be at maximum 16000 characters long`)
    .bail()
    .matches(/^[A-Za-zäöåÄÖÅ0-9\s/,-]*$/)
    .withMessage(`${fieldName} must contain only letters, numbers and -`)
    .bail(),
];

export const createTimeValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .matches(/^(0*[2][0-3]|0*[1][0-9]|0*[0-9]):([0-5][0-9])$/)
    .withMessage('Accepted format: 00:00, from 00:00 to 29:59')
    .bail()
    .notEmpty()
    .withMessage('Cannot be empty')
    .bail(),
];

export const createTimeLengthValidatorChainHoursAndMinutes = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .matches(/^(0*[2][0-3]|0*[1][0-9]|0*[0-9]):([0-5][0-9])$/)
    .withMessage('Accepted format: 00:00, from 00:00 to 29:59')
    .bail()
    .notEmpty()
    .withMessage('Cannot be empty')
    .bail(),
];

export const createMultiTimeValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  body(`*.${fieldName}`)
    .matches(/^([0-1][0-9]):([0-5][0-9])(:[0-5][0-9])?$/)
    .withMessage('Accepted format: 00:00 or 00:00:00')
    .bail()
    .notEmpty()
    .withMessage('Cannot be empty')
    .bail(),
];

export const createBoolValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  check(`${fieldName}`)
    .matches(/[0-1]/)
    .withMessage('Must be a number between 0 and 1')
    .bail()
    .notEmpty()
    .withMessage('Cannot be empty')
    .bail(),
];

export const createMultiBoolValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  body(`*.${fieldName}`)
    .matches(/[0-1]/)
    .withMessage('Must be a number between 0 and 1')
    .bail()
    .notEmpty()
    .withMessage('Cannot be empty')
    .bail(),
];

export const createFloatValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  body(`${fieldName}`)
    .matches(/^[0-9]*(.[0-9]{1,2})?$/)
    .withMessage('Must be a number')
    .bail()
    .isFloat()
    .notEmpty()
    .withMessage('Cannot be empty')
    .bail(),
];

export const createMultiFloatValidatorChain = (
  fieldName: string,
): ValidationChain[] => [
  body(`*.${fieldName}`)
    .matches(/^[0-9]*(.[0-9]{1,2})?$/)
    .withMessage('Must be a number')
    .bail()
    .isFloat()
    .notEmpty()
    .withMessage('Cannot be empty')
    .bail(),
];

export const validateIdObl = [...createIdValidatorChain('id')];

export const validateNameObl = [...createNameValidatorChain('name')];

export const validateDescription = [
  ...createDescriptionValidatorChain('description'),
];

export const validateDescriptionObl = [
  ...createDescriptionValidatorChainObl('description'),
];

export const validateMultiNameObl = [...createMultiNameValidatorChain('name')];

export const validateMultiDescription = [
  ...createMultiDescriptionValidatorChain('description'),
];
