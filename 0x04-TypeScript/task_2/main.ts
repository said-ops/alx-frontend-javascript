

interface DirectorInterface {
  workFromHome() :string;
  workDirectorTasks():string;
  getCoffeeBreak():string
}
interface TeacherInterface  {
  workFromHome() :string;
  workTeacherTasks():string;
  getCoffeeBreak():string
}
class Director implements DirectorInterface{
  workFromHome(): string {
  return 'Working from home'
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
}
class Teacher implements TeacherInterface{
  workFromHome(): string {
  return 'cannot from home'
  }
  workTeacherTasks(): string {
    return 'getting into work'
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
}

const createEmployee = (salary :string|number)=>{
  if(typeof salary ==='number'){
   return salary<500? new Teacher (): new Director  ()
  }
  if(typeof salary === 'string'){
   return parseInt(salary.slice(0))<500? new Teacher( ) : new Director()
  }
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));


//task 6
//function to check employee instance
function isDirector(employee: any){
  return employee instanceof Director;
}

function executeWork (employee:any){
  if(isDirector(employee)){
    console.log(employee.workDirectorTasks())
  }
  if(!isDirector(employee)){
    console.log(employee.workTeacherTasks())
  }
}

executeWork(createEmployee(200))
executeWork(createEmployee(2000))