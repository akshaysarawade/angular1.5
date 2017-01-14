class editStudentCtrl {
	constructor(StudentService) {
		'ngInject';
		let students = StudentService.getData();
/*		let me = this;
		students.then(function(res) {
			me.students = res;
		}, function(err) {
			console.log(err);
		});
*/
		this.name = 'Vishal V Lohkare';
		this.email = 'vishal.lohkare@globant.com';
		this.password = 'passwd';
		this.birthdate = '10/21/1987';
		this.country = 'Denmarks';
	}
}

let editStudentBindings = {

};

let editStudent = {
	bindings: editStudentBindings,
	controller: editStudentCtrl,
	templateUrl: 'components/edit-student.html'
};

export default editStudent;
