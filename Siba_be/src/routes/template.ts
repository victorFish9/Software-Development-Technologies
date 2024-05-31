import express, { Request, Response } from 'express';
import { admin } from '../authorization/admin.js';
import { planner } from '../authorization/planner.js';
import { roleChecker } from '../authorization/roleChecker.js';
import { authenticator } from '../authorization/userValidation.js';
import { validate } from '../validationHandler/index.js';

const template = express.Router();

template.get(
  '/building',
  [authenticator, admin, planner, roleChecker, validate],
  (req: Request, res: Response) => {
    res
      .status(200)
      .header({
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=templaatti.xlsx',
      })
      .download(
        './templates/building_template.xlsx',
        'building_templaatti.xlsx',
      );
  },
);

template.get(
  '/subject',
  [authenticator, admin, planner, roleChecker, validate],
  (req: Request, res: Response) => {
    res
      .status(200)
      .header({
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=templaatti.xlsx',
      })
      .download('./templates/subject_template.xlsx', 'subject_templaatti.xlsx');
  },
);

template.get(
  '/space',
  [authenticator, admin, planner, roleChecker, validate],
  (req: Request, res: Response) => {
    res
      .status(200)
      .header({
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=templaatti.xlsx',
      })
      .download('./templates/space_template.xlsx', 'space_templaatti.xlsx');
  },
);

template.get(
  '/equipment',
  [authenticator, admin, planner, roleChecker, validate],
  (req: Request, res: Response) => {
    res
      .status(200)
      .header({
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=templaatti.xlsx',
      })
      .download(
        './templates/equipment_template.xlsx',
        'equipment_templaatti.xlsx',
      );
  },
);

export default template;
