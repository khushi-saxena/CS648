/*eslint-env browser*/

var inventory = [
    [4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39.99],
    [3223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99]
];

function displayTitle() {
    console.log("=== Product Inventory Management System ===");
}

function displayMenu() {
    console.log("\nCommand Menu:");
    console.log("1. View all products");
    console.log("2. Update product inventory");
    console.log("3. Exit");
}

function viewAllProducts() {
    console.log("\n=== All Products ===");
    for (var i = 0; i < inventory.length; i++) {
        var sku = inventory[i][0];
        var name = inventory[i][1];
        var quantity = inventory[i][2];
        var cost = inventory[i][3];
        console.log(sku + " " + name + " (" + quantity + ") $" + cost.toFixed(2));
    }
}

function updateProductInventory() {
    var skuInput = prompt("Enter the SKU number of the product to update:");
    var sku = parseInt(skuInput);
    var found = false;
    
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === sku) {
            found = true;
            var newQuantityInput = prompt("Enter the new stock quantity:");
            var newQuantity = parseInt(newQuantityInput);
            inventory[i][2] = newQuantity;
            alert("Product " + inventory[i][1] + " (SKU: " + sku + ") quantity updated to " + newQuantity);
            console.log("Updated " + inventory[i][1] + " (SKU: " + sku + ") quantity to " + newQuantity);
            break;
        }
    }
    
    if (!found) {
        alert("Product with SKU " + sku + " not found!");
    }
}

function runInventorySystem() {
    displayTitle();
    
    while (true) {
        displayMenu();
        var choice = prompt("Enter your choice (1-3):");
        
        if (choice === "1") {
            viewAllProducts();
        } else if (choice === "2") {
            updateProductInventory();
        } else if (choice === "3") {
            console.log("Exiting program...");
            break;
        } else {
            alert("Invalid choice! Please enter 1, 2, or 3.");
        }
    }
}

runInventorySystem();
