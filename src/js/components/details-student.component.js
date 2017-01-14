class detailsStudentCtrl {
	constructor(StudentService, $stateParams, $scope) {
		'ngInject';
    this.studentService = StudentService;
    this._$stateParams = $stateParams;
    this.fetchDataByKey();
	}

  fetchDataByKey () {
    let key = this._$stateParams.studentId;
    let data = '';
    let me = this;
    let studentPromise = this.studentService.getDataByKey(key);
    studentPromise.then(function(res) {
      me.data = res;
    }, function(err) {
      console.log(err);
      me.data = 'No data found'; //  move this into a constant file
    });

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
