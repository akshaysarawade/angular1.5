function StudentConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.studentList', {
    url: '/student/list',
    template: '<student-list></student-list>'
  });
};

export default StudentConfig;
