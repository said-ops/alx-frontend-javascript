/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./Cpp.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />

const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
  };
  
  const cpp = new Subjects.Cpp();
  cpp.setTeacher(cTeacher);
  console.log("Cpp");
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
  
  const java = new Subjects.Java();
  java.setTeacher(cTeacher);
  console.log("Java");
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());
  
  const react = new Subjects.React();
  react.setTeacher(cTeacher);
  console.log("React");
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
  