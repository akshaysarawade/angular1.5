function StudentConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.studentList', {
    url: '/student/list',
    template: '<student-list></student-list>'
  })
  .state('app.createStudent', {
    url: '/student/create',
    template: '<create-student></create-student>'
  });
};

export default StudentConfig;
