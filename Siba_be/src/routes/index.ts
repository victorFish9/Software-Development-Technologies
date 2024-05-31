import express from 'express';
import allocround from './allocRound.js';
import allocation from './allocation.js';
import building from './building.js';
import department from './department.js';
import departmentplanner from './departmentplanner.js';
import equipment from './equipment.js';
import program from './program.js';
import resetDatabase from './resetDatabase.js';
import setting from './setting.js';
import space from './space.js';
import spaceequipment from './spaceEquipment.js';
import spaceType from './spaceType.js';
import subject from './subject.js';
import subjectequipment from './subjectEquipment.js';
import template from './template.js';
import user from './user.js';

const routes = express.Router();

routes.use('/allocation', allocation);
routes.use('/allocRound', allocround);
routes.use('/building', building);
routes.use('/department', department);
routes.use('/equipment', equipment);
routes.use('/program', program);
routes.use('/setting', setting);
routes.use('/space', space);
routes.use('/spaceType', spaceType);
routes.use('/spaceequipment', spaceequipment);
routes.use('/subject', subject);
routes.use('/subjectequipment', subjectequipment);
routes.use('/user', user);
routes.use('/departmentplanner', departmentplanner);
routes.use('/template', template);
routes.use('/resetDatabase', resetDatabase);

export default routes;
