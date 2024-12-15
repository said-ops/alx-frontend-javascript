var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
console.log(teacher3);
var printTeacher = function (teacher) {
    var firstLetter = teacher.firstName.charAt(0).toUpperCase();
    return firstLetter + ". " + teacher.lastName;
};
console.log(printTeacher(teacher3));
// class student 
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student1 = new StudentClass({ firstName: 'said', lastName: 'idrissi' });
console.log(student1.displayName());
console.log(student1.workOnHomework());
