import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import StudentService from './student.service.js';
servicesModule.service('StudentService', StudentService);


export default servicesModule;
