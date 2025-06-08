//Step 2: Create Customer Records
let customers = [
{
    name: "Bob Wallace",
    email: "bobwallace@outlook.com",
    purchases: ["MacBook Pro", "Computer Mouse", "Headphones"],
},
{
    name: "Lucas Brown",
    email: "lucasbrown@outlook.com",
    purchases: ["Office Chair", "Desk Lamp", "Monitor"],
},
{ 
    name: "John Smith",
    email: "johnsmith@outlook.com",
    purchases: ["Office Desk", "USB-C Dock", "Wireless Charger"],
},
];
console.log("Initial Customers:" , customers);
//Step 3: Add and Remove Data
const newCustomer = {
    name: "Alice Johnson",
    email: "alicejohnson@outlook.com",
    purchases: ["Laptop Stand", "Wireless Mouse", "Keyboard"],
};
customers.push(newCusomer);
customers.shift(); // Remove customer Bob Wallace
//Step 4: Update Customer Info
customers[0].email = "lucasbrown@gmail.com"; // Update Lucas Brown's email
customers[1].purchases.push("Office Chair"); // Add purchase to John Smith
//Step 5: Display Customer Information
    console.log("\nCustomer Information:");
    customers.forEach(customer => { 
        console.log(`Name: ${customer.name}`);
        console.log(`Email: ${customer.email}`);
        console.log(`Purchases: ${customer.purchases.join(", ")}`);
        console.log("-----------------------------");
    });  