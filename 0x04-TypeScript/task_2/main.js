var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'cannot from home';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'cannot have a break';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === 'number') {
        return salary < 500 ? new Teacher() : new Director();
    }
    if (typeof salary === 'string') {
        return parseInt(salary.slice(0)) < 500 ? new Teacher() : new Director();
    }
};
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
