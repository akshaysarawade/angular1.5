import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import Student from './student.component.js';
componentsModule.component('student', Student);

export default componentsModule;
