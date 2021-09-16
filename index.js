const inquirer = require('inquirer');

const chooseSection = ()=> {
    inquirer.prompt([
      {
        type: 'list',
        name: 'chooseSection',
        message: 'Choose from the following options:',
        choices: [
            "view all departments",
            "view all departments",,
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update employee role"

        ]
      },
    
  
    ])
  
    .then(response => {
        switch (expression) {
            case "view all departments":
              //open view all dept
              //result of expression matches value1
            //   [break;]
            case "view all departments":
              //open all roles
              //result of expression matches value2
            //   [break;]
            case "add a role":
              //open all employee
            //   //result of expression matches valueN
            //   [break;]
            // [default:
            //   //Statements executed when none of
            //   //the values match the value of the expression
            //   [break;]]
          }
      }
    );
  
  };



//add a role 

const addRole = ()=> {
    inquirer.prompt([
      {
        type: 'input',
        name: 'addRole',
        message: 'What Role would you like to add?',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of this role?',
      },
      {
        type: 'list',
        name: 'department',
        message: 'Choose from the following options:',
        choices: [
            "Engineering",
            "Finance",
            "Legal",
            "Sales",
            "Service"

        ]
      },
    
    ])
    .then(response => {
        //add to SQL Database
      });
}