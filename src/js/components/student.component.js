class StudentCtrl {
	constructor() {
		this.students = [
		{
			name: 'Cesc', age: 30, city: 'London'
		},{
			name: 'Henrik', age: 27, city: 'Manchester'
		},{
			name: 'CR', age: 31, city: 'Madrid'
		},{
			name: 'Robert', age: 28, city: 'Munich'
		},{
			name: 'Paul', age: 22, city: 'Manchester'
		}];
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