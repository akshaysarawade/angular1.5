class editStudentCtrl {
	constructor(StudentService, $stateParams) {
		'ngInject';
		this.studentId = $stateParams.studentId;
		console.log('key',$stateParams.studentId);
		StudentService.getDataByKey(this.studentId).then(function(data){
			console.log('data',data);
			this.name = data.name;//'Vishal V Lohkare';
			this.email = 'vishal.lohkare@globant.com';
			this.password = 'passwd';
			this.birthdate = '10/21/1987';
			this.country = data.country;//'Denmarks';
		});

/*		let me = this;
		students.then(function(res) {
			me.students = res;
		}, function(err) {
			console.log(err);
		});
*/
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
