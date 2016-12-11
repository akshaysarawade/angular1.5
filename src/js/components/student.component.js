class StudentCtrl {
	constructor(StudentService) {
		'ngInject';
		let students = StudentService.getData();
		let me = this;
		students.then(function(res) {
			me.students = res;
		}, function(err) {
			console.log(err);
		});
		this.name = 'Student Records';
	}


}

let studentBindings = {

};

let Student = {
	bindings: studentBindings,
	controller: StudentCtrl,
	templateUrl: 'components/student.html'
};

export default Student;
