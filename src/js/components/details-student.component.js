class detailsStudentCtrl {
	constructor(StudentService) {
		'ngInject';

		this.name = 'Vishal V Lohkare';
		this.email = 'vishal.lohkare@globant.com';
		this.password = 'passwd';
		this.birthdate = '10/21/1987';
		this.country = 'Denmark';
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
