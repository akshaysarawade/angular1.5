class StudentService {
  constructor ($q, $state) {
    'ngInject';
    this._$q = $q;
    this.studentsRef = firebase.database().ref('students');
    this._$state = $state;
  }

  // fetch students data
  getData () {
    let def = this._$q.defer();
    let studentData = [];
    this.studentsRef.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          let dataObj = childSnapshot.val();
          //  add the unique key to the record
          dataObj.key = childSnapshot.key;
          studentData.push(dataObj);
        });
        def.resolve(studentData);
      });
    return def.promise;
  }

  // to save a student record
  saveStudent (data, key) {
    let newStudentRef = '';
    //  edit record
    if (key) {
      newStudentRef = firebase.database().ref('students/'+key);
    }
    //  new record
    else {
      newStudentRef = this.studentsRef.push();
    }

    let successMsg = newStudentRef.set(data);
    this._$state.go('app.studentList');
  }

  //  to fetch the data for a single record
  //  TODO: remove below function and add this code into getData() above
  getDataByKey (key) {
    let def = this._$q.defer();
    // let tempKey = '-KYdjcTB1vy5bOpGRn6j';  //  replace this with the actual key
    let ref = firebase.database().ref('students/'+key);
    ref.once("value")
      .then(function(snapshot) {
        let record = snapshot.val();
        //  add key to the record
        record.key = key
        def.resolve(record);
      });
    return def.promise;
  }

  // delete student record
  deleteStudent (key) {
    var ref = firebase.database().ref('students/'+key);
    ref.remove()
      .then(function() {
        console.log("Remove succeeded.");
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message);
      });
    this._$state.reload();
  }
}

export default StudentService;
