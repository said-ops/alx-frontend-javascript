
//Student Interface 

interface Student {
    firstName : string;
    lastName: string;
    age: number;
    location: string;
}

let firstStudent :Student = {
    firstName :'said',
    lastName:'idrissi',
    age : 27,
    location: 'av ouad edahab',
};
let secondStudent :Student = {
    firstName :'youssef',
    lastName:'msfioui',
    age : 22,
    location: 'av ouad kenar',
};
let studentsList :Student[] = [firstStudent,secondStudent] 

function render (){
    console.table(studentsList.map(std=>({
        'first name' : std.firstName,
        'location' : std.location
    })))
}

render();