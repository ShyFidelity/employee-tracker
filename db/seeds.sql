INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role ( title, salary, department_id )
VALUES ( "Sales Leader", 1000000000, 4),
       ( "Salesperson", 80000, 4),
       ( "Lead Engineer", 1, 1),
       ( "Software Engineer", 90, 1),
       ( "Exotic Dancer", 2000000000, 3),
       ( "Accountant", 100000, 2),
       ( "Lawyer", 100000000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Zazu", "Wazu",  1, null),
       ( "Cray", "Physh", 2, 1),
       ( "Svetlana", "Sunday", 3, 2 );
  