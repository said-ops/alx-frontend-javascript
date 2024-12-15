// Cpp.ts

namespace Subjects {
    // Define the Cpp class extending Subject
    export class Cpp extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        }
        return "No available teacher";
      }
    }
  }
  