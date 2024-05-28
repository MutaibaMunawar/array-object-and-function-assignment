// ... Q 1 ...// building your friend list
type Friend = {
  firstName: string;
  lastName: string;
  id?: number;
};
const people: { friends: Friend[] } = { friends: [] };
let friend1: Friend = {
  firstName: "jaweria",
  lastName: "siddique",
  id: 5435,
};
let friend2: Friend = {
  firstName: "asfa",
  lastName: "qasim",
};
let friend3: Friend = {
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

const scrambledArray = ["of", "student", 123, true, "GIAIC", "am", "a", "I"];
scrambledArray.shift();
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(1, 3);
scrambledArray.splice(1, 0, "am", "a");
scrambledArray.splice(3, 5, "student", "of", "GIAIC");
let response = scrambledArray.join("  ");
console.log(response);

//.........Q 3 ..........
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

type Product = { name: string; model: number; cost: number; quantity: number };

let inventory: Product[] = [];
const product1: Product = {
  name: "bike",
  model: 2024,
  cost: 205000,
  quantity: 1,
};
const product2: Product = {
  name: "Nike",
  model: 2024,
  cost: 500,
  quantity: 51,
};
const product3: Product = {
  name: "laptop",
  model: 2023,
  cost: 355000,
  quantity: 15,
};
inventory.push(product1);
inventory.push(product1);
inventory.push(product1);
console.log(inventory[2].quantity);


//Assignment........Q 4: ........ Student List Organizer

type Student = { name: string; senior: boolean; assignmentComplete: boolean };

let student1: Student = {
  name: "abeera",
  senior: false,
  assignmentComplete: false,
};
let student2: Student = {
  name: "jaweria",
  senior: true,
  assignmentComplete: true,
};
let student3: Student = {
  name: "mutaiba",
  senior: false,
  assignmentComplete: true,
};

let student_1 = student1.assignmentComplete && student1.senior;
let student_2 = student1.assignmentComplete && student1.senior;
let student_3 = student1.assignmentComplete && student1.senior;

function Student() {
  if (student1.assignmentComplete && student1.senior === student_1) {
    console.log(student1);
  } else if (student2.assignmentComplete && student1.senior === student_2) {
    console.log(student2);
  }
  if (student3.assignmentComplete && student1.senior === student_3) {
    console.log(student3);
  }
}
Student();
