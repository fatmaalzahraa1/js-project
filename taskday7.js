class Person {
    static #count = 0;
    #id;
    constructor(a, b, c) {
        console.log(this.constructor)
        if (this.constructor == Person) {
            throw 'error this is abstract class'
        }
        this.name = a;
        this.age = b;
        this.salary = c;
    }
    setID(x) {

        this.#id = x;
    }

    getID() {
        return this.#id;
    }

}
class Employee extends Person {
    static count = 0;
    constructor(a, b, c) {
        Employee.count++;
        super(a, b, c)
    }
    static displayHTRules() {
        console.log("a:fatma,b:radwa,c:ola");
    }
    getcount() {
        return Employee.count;
    }

// task2
    showSalary() {
        console.log(this.salary)
    }
    increaseSalalry() {
        console.log(this.salary + 2000)
    }

}

class Student extends Person {
    constructor(a, b) {
        super(a, b)
    }
}

Employee.displayHTRules()

var p1 = new Employee("ahmed", 22, 2000);
var p2 = new Employee("mohamed", 44, 5000);
var p2 = new Employee("negm", 44, 3000);
console.log(Employee.count);
p2.showSalary()
p2.increaseSalalry()

// task3
var ScientificDepartment = {
    Location: "Egypt",
    Address: {
        City: "aswan",
        Street: "elkornish",
        zipCode: "123",


    }, display: function () {
        return "Location: " + this.Location + " " + this.Address.City + " " + this.Address.Street + " " + this.Address.zipCode;
    }

};
console.log(ScientificDepartment.display());

// task4
function minMaxValue(...arr) {

    var min = Math.min(...arr)
    var index1 = arr.indexOf(min);

    var max = Math.max(...arr);
    var index = arr.indexOf(max);

    console.log("max : ", arr[index]);
    console.log("min : ", arr[index1]);
}
minMaxValue(10, 2, 3, 57, 8, 7, 23, 50,100)


// task5

var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 


fruits.forEach(function (x) {

console.log(x)

});

var f =fruits.filter(function(x){
    return x[0]==="a"
   }) 
   console.log(f)

  var filtered =fruits.filter((x)=>{
    return x[0]==="a"||x [0]==="b"
   }) 
   console.log(filtered)

//  task 6
var countries=["Algeria","Andorra","Angola","Angola","Albania","Albania"];

var L=countries.length 
var S=new Set(countries)

var X=L-S.size

console.log(X)
