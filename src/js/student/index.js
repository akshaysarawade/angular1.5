import angular from 'angular';

// Create the module where our functionality can attach to
let studentModule = angular.module('app.student', []);

// Include our UI-Router config settings
import StudentConfig from './student.config';
studentModule.config(StudentConfig);


// Controllers
// import StudentCtrl from './student.controller';
// studentModule.controller('StudentCtrl', StudentCtrl);


export default studentModule;
