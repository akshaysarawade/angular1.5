class createStudentCtrl {
	constructor(StudentService) {
		'ngInject';
    this.studentService = StudentService;
    this.data = {};
  }

  addNewRecord () {
    this.studentService.saveStudent(this.data);
    this.flushRecord();
  }

  // flush the student record after it is saved
  flushRecord () {
    this.data = {};
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
