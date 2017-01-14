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
  })
  .state('app.detailsStudent', {
    url: '/student/details/:studentId',
    template: '<details-student></details-student>'
  })
  .state('app.editStudent', {
    url: '/student/edit/:studentId',
    template: '<edit-student></edit-student>'
  });
};

export default StudentConfig;
