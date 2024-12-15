// React.ts

namespace Subjects {
    export class React extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for React";
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingReact !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        }
        return "No available teacher";
      }
    }
  }
  