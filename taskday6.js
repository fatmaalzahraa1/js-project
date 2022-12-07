
// task1 :a
function Books(id, name, writer_name, num_Page) {
    this.id = id;
    this.name = name;
    this.writer_name = writer_name;
    this.num_Page = num_Page;
}
function box(width, height, containbooks) {
    this.width = width;
    this.height = height;
    this.containbooks = containbooks;
}
var p1 = new Books(1, 'ahmed', "js", 100);
var p2 = new Books(2, 'mohamod', "c++", 200);
var p3 = new Books(3, 'sayed', "oop", 150);

var b = [p1, p2, p3];

var box1 = new box(50, 100, b);

var sum = 0;
for (var i = 0; i < b.length; i++) {
    sum += box1.containbooks[i].num_Page;
}
console.log(sum);

// b
var x = box1.height * box1.width;
console.log(x);


// task2: a
function Point3D(x, y, z) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
}

Point3D.prototype.print3DPoint = function () {
    console.log("Point3D", "X =", this.x + "Y =", this.y + "Z =", this.z);
}
p1 = new Point3D();
p2 = new Point3D(1, 2, 3);

p1.print3DPoint()

// c
Point3D.prototype.calculateDistance = function (P2) {
    d = Math.sqrt((p2.x - this.x) ^ 2 + (p2.y - this.y) ^ 2 + (p2.z - this.z) ^ 2);
}
p1.calculateDistance();
console.log(d);


// task3
function Course(id, _name) {
    this.id = id;
    this.name = _name;
    this.grade = 0;
}

function student(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
}
var cou1 = new Course(1, "js");
var cou2 = new Course(2, "c++");
var cou3 = new Course(3, "oop");
var x = [cou1, cou2, cou3];
var stu1 = new student(1, 'ahmed', x);
console.log(stu1);

student.prototype.display = function () {
    console.log(this.id, this.name);
    for (var i = 0; i < this.course.length; i++) {
        console.log(this.course[i].name )
        console.log(this.course[i].grade)
    }
}
student.prototype.grades =function()
{
    for(var i=0; i < this.course.length; i++){
        var z = parseInt(prompt("Enter your  grade of course: "+this.course[i].name))
        this.course[i].grade = z;
    }
}

student.prototype.allgrades=function()
{
    var sum = 0;
    for(var i=0; i < this.courses.length; i++){
        sum += this.courses[i].grade;
    }
    return sum;
}
stu1.grades ()
stu1.display()
