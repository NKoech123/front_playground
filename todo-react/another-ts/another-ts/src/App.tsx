import React from 'react';

//type declaration

interface Guest{
  name: string;
  age: number
}

// Welcome component
function Welcome (guest:Guest){
  return <h1>Happy Birthday {guest.name}. You are now {guest.age} years old</h1>;
}

function App() {

  const theguest = {
      name: "Nick",
      age:26
    };

  return (
    <div>
      
      <Welcome {...theguest} />
      
    </div>
  
  );
}


export default App;
