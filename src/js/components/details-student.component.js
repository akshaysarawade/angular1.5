class detailsStudentCtrl {
	constructor(StudentService) {
		'ngInject';
		let students = StudentService.getData();
		let me = this;
/*		students.then(function(res) {
			me.students = res;
		}, function(err) {
			console.log(err);
		});
*/
	this.name = 'Vishal V Lohkare';
	this.email = 'Vishal.lohkare@globant.com';
	this.password = 'Passwd';
	this.birthdate = '10/21/1987';
	this.country = 'Afghanistan';

	}
}

let detailsStudentBindings = {

};

let detailsStudent = {
	bindings: detailsStudentBindings,
	controller: detailsStudentCtrl,
	templateUrl: 'components/details-student.html'
};

export default detailsStudent;
