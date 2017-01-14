class StudentListCtrl {
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

let StudentList = {
	bindings: studentBindings,
	controller: StudentListCtrl,
	templateUrl: 'components/student-list.html'
};

export default StudentList;
