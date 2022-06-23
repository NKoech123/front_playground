import React from 'react';


function App() {

  interface Employee {
    name: string;
    age: number;
    department: string;
    salary: number;
  }

  const peter: Employee = {
    name: "Peter Nate",
    age:40,
    department: "Protocol",
    salary: 40000000
  };
  
  function employeeDetails(employee: Employee){
    return "My name is " + employee.name + "and I am " + employee.age + " years old";

  };

  console.log(employeeDetails(peter))
  
  return (
    <div>
 
      <h1>{employeeDetails(peter)}.</h1>

    </div>
  
  );
}

export default App;
