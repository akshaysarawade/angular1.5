function StudentConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.student', {
    url: '/student',
    controller: 'StudentCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'student/student.html'
  });

};

export default StudentConfig;
