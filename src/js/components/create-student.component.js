class createStudentCtrl {
	constructor(StudentService) {
		'ngInject';
/*		let students = StudentService.getData();
		let me = this;
		students.then(function(res) {
			me.students = res;
		}, function(err) {
			console.log(err);
		});
		this.name = 'Student Records';
*/
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
