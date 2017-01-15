import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import StudentList from './student-list.component.js';
componentsModule.component('studentList', StudentList);

import CreateStudent from './create-student.component.js';
componentsModule.component('createStudent', CreateStudent);

import DetailsStudent from './details-student.component.js';
componentsModule.component('detailsStudent', DetailsStudent);

import EditStudent from './edit-student.component.js';
componentsModule.component('editStudent', EditStudent);

export default componentsModule;
