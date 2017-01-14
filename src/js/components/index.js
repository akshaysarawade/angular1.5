import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import StudentList from './student-list.component.js';
componentsModule.component('studentList', StudentList);

export default componentsModule;
