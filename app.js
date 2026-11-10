// task 1

function student(name ,rollNumber,mark) {
    this.name =name;
    this.rollNumber=rollNumber;
    this.mark=mark;
}

student.prototype.showDetails = function () {
    return `name : ${this.name} , rollNumber : ${this.rollNumber} , mark : ${this.mark}`
}

student.prototype.updateMarks =function (newMark) {
    this.mark = newMark;
    return `name : ${this.name} , new mark : ${this.mark}`
}

let student1=new student("ali" , 23 ,80)
let student2=new student("ahmed" , 34 ,70)
let student3=new student("rizwan" , 45 ,90)

console.log(student1.showDetails())
console.log(student2.showDetails())
console.log(student3.showDetails())


console.log(student1.showDetails === student2.showDetails);
console.log(student1.showDetails === student3.showDetails);

// task 2

console.log("name in student1", "name" in student1)
console.log("showDetails in student1", "showDetails" in student1)
console.log("hasOwnProperty name:", student1.hasOwnProperty("name"))
console.log("hasOwnProperty showDetails:", student1.hasOwnProperty("showDetails"))
console.log("typeof showDetails" , typeof student1.showDetails );

// task 3

student.prototype.institute =function () {
    return "SMIT"
}

console.log(student1.institute());
console.log(student2.institute());


console.log(Object.getPrototypeOf(student1) === student.prototype);