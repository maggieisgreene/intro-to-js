const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)');
    } else {
        console.log('SHAME');
    }
}

bouncer(12);
bouncer(93);

const me = 'martin';
console.log(me.length);

const myObject = {
    name: 'John',
    age: '41'
}

console.log(myObject.name);


// Challenge
// create a function that takes in an employee,
//if the employees firstName starts with an M then add a key=status and value='vip'
//if the employees firstName does not start with an M then add a key=status and value='peasant'


const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'vip';
    } else {
        employee.status = 'peasant';
    }
    console.log(`${employee.name} is a total ${employee.status}!`);
    return employee;
}

const person = {
    name: 'Michael',
    status: ''
}

findAndLogEmployeeStatus(person);

findAndLogEmployeeStatus({
    name: prompt('Enter Employee Name'),
    status: ''
})