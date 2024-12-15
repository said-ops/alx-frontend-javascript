

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
    return 'cannot have a break'
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
