const inquirer = require('inquirer');
require('dotenv').config();

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

const chooseSection = ()=> {
    inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'Choose from the following options:',
        choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update employee role",
            "quit"

        ]
      },
    
  
    ])
  
    .then(async response => {
        switch (response.menu) {
            case "view all departments":
                const allDepartments = await connection.promise().query(
                    'SELECT * FROM `department`'
                     //async //await
                  ); 
                  console.table(allDepartments);
    
            break;
            case "view all roles":
                const allRoles = await connection.promise().query(
                    'SELECT role.id, role.title, role.salary, department.name FROM `role`LEFT JOIN department ON role.department_id = department.id '
                     //async //await
                  ); 
                  console.table(allRoles);
              break;
            case "add a role":
                addRole();
            break;
            case "view all employees":
            break;        
            case "add a department":
                   //open all employee
            //   //result of expression matches valueN
            break;
            case "add a role":
                   //open all employee
            //   //result of expression matches valueN
            break;
            case "add an employee":
                   //open all employee
            //   //result of expression matches valueN
            break;
            case "add an employee role":
                   //open all employee
            //   //result of expression matches valueN
            break;
          }
          chooseSection();   
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
        //INSERT INTO role title, salary, department_id VALUES (?), (?), (?);
      });
}


chooseSection();