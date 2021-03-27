const employee = {
    name: 'Sam',
    streetAddress: '123 somewhere street'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
//accepts an employee object and a key and returns an employee
//object wwithout the key value pair without affecting the employee
function  deleteFromEmployeeByKey(employee, key){
    //creating an newEmployee and copying it from employee
    const newEmployee = {...employee};
    //deletes a key value pair from newEmployee object
    delete newEmployee[key];
    //returning the newEmployee without the key value pair
    return newEmployee;
}
//does the same thing as the previous function while mutating employee
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}