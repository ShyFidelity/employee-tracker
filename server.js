const inquirer = require('inquirer');
require('dotenv').config();

// get the client
const mysql = require('mysql2');

// create the connection to database 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'dept_db'
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
  //switch statement to find an answer 
    .then(async response => {
        switch (response.menu) {
            case "view all departments":
                const allDepartments = await connection.promise().query(
                    'SELECT * FROM `department`'
                     //async //await
                  ); 
                  console.table(allDepartments[0]);
                  chooseSection()
    
            break;
            case "view all roles":
                const allRoles = await connection.promise().query(
                    'SELECT role.id, role.title, role.salary, department.name FROM `role`LEFT JOIN department ON role.department_id = department.id;'
                     //async //await
                  ); 
                  console.table(allRoles[0]);
                  chooseSection()
              break;
            case "add a role":
           
                addRole();

            break;
            case "view all employees":
              const allEmployees = await connection.promise().query(
                'SELECT employee.id, employee.first_name, employee.last_name, role.title, manager.last_name as manager FROM `employee` LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;'
                
              );
              console.table(allEmployees[0])
              chooseSection()
            break;        
            case "add a department":
      
           
            break;
          
            case "add an employee":
            addEmployee();
            break;
            case "add an employee role":
                 //function to add employee to a role
            break;
          }
       
      }

    );
   
};

const addEmployee = ()=> {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is employee first name?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is employee last name?',
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'what role?',
      choices: [
          {name: "Sales Leader", value: 1},
          {name: "Salesperson",value: 2},
          {name: "Lead Engineer", value: 3},
          {name: "Software Engineer", value: 4},
          {name: "Cha Cha Danver", value: 5},
          {name: "Accountant", value:6},
          {name: "Lawyer", value: 7}
        

            ]
    },

    {
      type: 'input',
      name: 'manager_id',
      message: 'manager name?'
    }
  
  ])
  .then(async response => {
    console.log(response);
    
    await connection.promise().query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);",
      [
        response.first_name,
        response.last_name,
        response.role_id,
        response.manger_id
      ]
    );
    console.log("Employee added");

  chooseSection();
    })

  }


//add a role 

const addRole = ()=> {
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
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
            {name: "Engineering", value: 1},
            {name: "Finance",value: 2},
            {name: "Legal", value: 3},
            {name: "Sales",value:4}
          

              ]
      },
    
    ])
    .then(async response => {
      console.log(response);
      
      await connection.promise().query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);",
        [
          response.title,
          response.salary,
          response.department,
        ]
      );
      console.log("Employee added");
 
    chooseSection();
      })

    }
chooseSection()