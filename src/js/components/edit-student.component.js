class editStudentCtrl {
	constructor(StudentService, $stateParams) {
		'ngInject';
    this.studentService = StudentService;
    this._$stateParams = $stateParams;
    this.data = {};
    this.fetchDataByKey();
	}

  fetchDataByKey () {
    let key = this._$stateParams.studentId;
    let me = this;
    let studentPromise = this.studentService.getDataByKey(key);
    studentPromise.then(function(res) {
      me.data = res;
    }, function(err) {
      console.log(err);
      me.data = 'No data found'; //  move this into a constant file
    });
  }

  updateRecord (key) {
    this.studentService.saveStudent(this.data, key);
    this.data = {};
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
