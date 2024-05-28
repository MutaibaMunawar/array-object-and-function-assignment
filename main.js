var people = { friends: [] };
var friend1 = {
    firstName: "jaweria",
    lastName: "siddique",
    id: 5435,
};
var friend2 = {
    firstName: "asfa",
    lastName: "qasim",
};
var friend3 = {
    firstName: "misbah",
    lastName: "khan",
    id: 2315,
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
console.log(people);
// .......Q 2 ..........//
//Manupulating an array : Rearranging words //
var scrambledArray = ["of", "student", 123, true, "GIAIC", "am", "a", "I"];
scrambledArray.shift();
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(1, 3);
scrambledArray.splice(1, 0, "am", "a");
scrambledArray.splice(3, 5, "student", "of", "GIAIC");
var response = scrambledArray.join("  ");
console.log(response);
var inventory = [];
var product1 = { name: "bike", model: 2024, cost: 205000, quantity: 1,
};
var product2 = { name: "Nike", model: 2024, cost: 500, quantity: 51,
};
var product3 = { name: "laptop", model: 2023, cost: 355000, quantity: 15,
};
inventory.push(product1);
inventory.push(product1);
inventory.push(product1);
console.log(inventory[2].quantity);
var student1 = { name: "abeera", senior: false, assignmentComplete: false };
var student2 = { name: "jaweria", senior: true, assignmentComplete: true };
var student3 = { name: "mutaiba", senior: false, assignmentComplete: true };
var student_1 = student1.assignmentComplete && student1.senior;
var student_2 = student1.assignmentComplete && student1.senior;
var student_3 = student1.assignmentComplete && student1.senior;
function Student() {
    if (student1.assignmentComplete && student1.senior === student_1) {
        console.log(student1);
    }
    else if (student2.assignmentComplete && student1.senior === student_2) {
        console.log(student2);
    }
    if (student3.assignmentComplete && student1.senior === student_3) {
        console.log(student3);
    }
}
Student();
