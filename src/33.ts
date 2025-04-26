class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function printStudent(student: Student) {
  console.log(`${student.name} is ${student.age} years old.`);
}
