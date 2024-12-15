//Student Interface 
var firstStudent = {
    firstName: 'said',
    lastName: 'idrissi',
    age: 27,
    location: 'av ouad edahab'
};
var secondStudent = {
    firstName: 'youssef',
    lastName: 'msfioui',
    age: 22,
    location: 'av ouad kenar'
};
var studentsList = [firstStudent, secondStudent];
function render() {
    console.table(studentsList.map(function (std) { return ({
        'first name': std.firstName,
        'location': std.location
    }); }));
}
render();
