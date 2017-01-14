import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import StudentList from './student-list.component.js';
componentsModule.component('studentList', StudentList);

import createStudent from './createStudent.component.js';
componentsModule.component('createStudent', createStudent);

export default componentsModule;
