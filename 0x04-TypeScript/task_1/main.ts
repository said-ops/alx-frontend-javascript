
//teachers 
interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee:boolean;
  [key:string]: any;
  yearsOfExperience? : number;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
// directors 
  interface Directors extends Teacher{
    numberOfReports : number
  }

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

  console.log(teacher3);

  // interface printTeacherFunction

  interface printTeacherFunction {
   (teacher :Teacher) :string
  }

  const printTeacher : printTeacherFunction = (teacher: Teacher) =>{
    const firstLetter = teacher.firstName.charAt(0).toUpperCase()

    return `${firstLetter}. ${teacher.lastName}`
  }

console.log(printTeacher(teacher3))

//student interface 

interface Student {
    firstName :string;
    lastName:string;
    workOnHomework():void;
    displayName():string;
}
//constructor interface
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// class student 

class StudentClass implements Student {

    firstName :string;
    lastName : string;

    constructor ({firstName,lastName} :StudentConstructor) {
        this.firstName=firstName;
        this.lastName=lastName
    }
    workOnHomework () :string {
        return 'Currently working'
    }
    displayName (): string {
        return this.firstName
    }
}

const student1 :Student = new StudentClass ({firstName:'said',lastName:'idrissi'})
console.log(student1.displayName())
console.log(student1.workOnHomework())