/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here

if (
  student.name.toLowerCase() === "jhankar" &&
  student.roll === 1014 &&
  student.department.toLowerCase() === "cse"
) {
  console.log(
    student.name + student.roll + "." + student.department + "@ph.ac.bd"
  );
} else if (
  student.name.toLowerCase() === "monu" &&
  student.roll === 99 &&
  student.department.toLowerCase() === "eee"
) {
  console.log(
    student.name + student.roll + "." + student.department + "@ph.ac.bd"
  );
} else if (
  student.name.toLowerCase() === "mewo" &&
  student.roll === 96 &&
  student.department.toLowerCase() === "cse"
) {
  console.log(
    student.name + student.roll + "." + student.department + "@ph.ac.bd"
  );
}
