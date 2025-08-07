/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
// var currentSalary = startingSalary;
// for(var i = 1; i <= experience; i ++){
//     currentSalary = currentSalary + (currentSalary * 0.05)
// }
// currentSalary = currentSalary.toFixed(2);
// console.log(currentSalary)

var salary = startingSalary;
salary = salary * (1.05 ** experience);
salary = salary.toFixed(2);
console.log(salary)