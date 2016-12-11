class StudentService {
	constructor ($q) {
		'ngInject';
		this._$q = $q;
		this.studentsRef = firebase.database().ref('students');
	}

	getData () {
		let def = this._$q.defer();
		let studentData = [];
		this.studentsRef.once("value")
		  .then(function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		      let dataObj = childSnapshot.val();
		      studentData.push(dataObj);
  			});
  			def.resolve(studentData);
		  });
		return def.promise;
	}
}

export default StudentService;