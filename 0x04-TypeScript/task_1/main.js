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
