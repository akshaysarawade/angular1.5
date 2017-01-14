class createStudentCtrl {
	constructor(StudentService) {
		'ngInject';
    this.studentService = StudentService;
  }

  addNewRecord () {
    this.studentService.saveStudent();
  }

}

let createStudentBindings = {

};

let createStudent = {
	bindings: createStudentBindings,
	controller: createStudentCtrl,
	templateUrl: 'components/create-student.html'
};

export default createStudent;
