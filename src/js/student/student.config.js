function StudentConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.studentList', {
    url: '/student/list',
    template: '<student-list></student-list>'
  })
  .state('app.createStudent', {
    url: '/student/create',
    template: '<createStudent></createStudent>'
  });
};

export default StudentConfig;
