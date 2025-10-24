
var employeesDetails = [ 
    ["Alice Johnson", "Project Manager", 1024], 
    ["Maria Gomez", "HR Coordinator", 3096], 
    ["John Johnson", "UI Designer", 3232], 
    ["Ethan Brown", "Manager", 4123], 
    ["Sophia James", "QA Analyst", 5234] 
];

function populateEmployeeCount() {
    var count = employeesDetails.length;
    document.getElementById('employeeCount').innerHTML = "Showing " + count + " Employee" + (count !== 1 ? "s" : "");
}

function clearAlerts() {
    document.getElementById('extensionError').innerHTML = "";
    document.getElementById('titleError').innerHTML = "";
    document.getElementById('nameError').innerHTML = "";
}

function clearForm() {
    document.getElementById('extension').value = "";
    document.getElementById('title').value = "";
    document.getElementById('employeeName').value = "";
    document.getElementById('employeeName').focus();
}

function generateEmployeeTable() {
    var employeeTable = document.getElementById('employeeTable');
    var i, j, r, button;

    while (employeeTable.rows.length > 1) {
        employeeTable.deleteRow(1);
    }

    for(i = 0; i < employeesDetails.length; i++) {
        r = employeeTable.insertRow(i + 1);
        
        for(j = 0; j < employeesDetails[i].length; j++) {
            r.insertCell(j).innerHTML = employeesDetails[i][j];
        }

        button = createDeleteButton();
        r.insertCell(j).appendChild(button);
    }

    populateEmployeeCount();
    clearForm();
}

function createDeleteButton() {
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Delete");
    button.setAttribute('onclick', 'deleteEmployee(this)');
    button.setAttribute('title', 'Delete this employee');
    return button;
}

function addEmployee() {
    var name = document.getElementById('employeeName').value.trim();
    var title = document.getElementById('title').value.trim();
    var extension = document.getElementById('extension').value.trim();
    
    clearAlerts();
    
    var isValid = true;
    
    if (name === "" || name === null) {
        document.getElementById('nameError').innerHTML = "Name cannot be empty.";
        isValid = false;
    }
    
    if (title === "" || title === null) {
        document.getElementById('titleError').innerHTML = "Title cannot be empty.";
        isValid = false;
    }
    
    if (extension === "" || extension === null) {
        document.getElementById('extensionError').innerHTML = "Extension cannot be empty.";
        isValid = false;
    }
    
    if (isValid) {
        var newEmployee = [name, title, extension];
        employeesDetails.push(newEmployee);
        
        addEmployeeToTable(newEmployee);
        
        populateEmployeeCount();
        clearForm();
    }
}

function addEmployeeToTable(employeeData) {
    var employeeTable = document.getElementById('employeeTable');
    var r = employeeTable.insertRow();
    var j, button;
    
    for(j = 0; j < employeeData.length; j++) {
        r.insertCell(j).innerHTML = employeeData[j];
    }
    
    button = createDeleteButton();
    r.insertCell(j).appendChild(button);
}

function deleteEmployee(buttonElement) {
    try {
        var rowIndex = buttonElement.parentNode.parentNode.rowIndex;
        
        employeesDetails.splice(rowIndex - 1, 1);
        
        document.getElementById('employeeTable').deleteRow(rowIndex);
        
        populateEmployeeCount();
        
        clearForm();
    } catch (error) {
        console.error("Error deleting employee:", error);
        alert("An error occurred while deleting the employee. Please try again.");
    }
}

function init() {
    try {
        document.getElementById('addButton').addEventListener('click', addEmployee);
        
        generateEmployeeTable();
        
        clearAlerts();
        
        clearForm();
        
        console.log("Employee Management System initialized successfully");
    } catch (error) {
        console.error("Error initializing Employee Management System:", error);
        alert("An error occurred while initializing the application. Please refresh the page.");
    }
}

window.addEventListener("load", init);