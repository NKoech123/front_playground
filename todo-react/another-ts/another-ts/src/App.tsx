import React from 'react';

//type declaration

interface Guest{
  name: string;
  age: number;
  from: string;
  to: string;
}

function Travel (guest: Guest){
  return <h1>The name of the guest is {guest.name} and traveling from {guest.from} to {guest.to}</h1>
}
function App() {

  const guest_instance = {
    name: "Nicholas",
    age: 26,
    from: "Nairobi",
    to: "NYC"
   };

  return (
    <div>
      
      <h1>Hello World </h1>
      <Travel  {...guest_instance}/> 
      
    </div>
  
  );
}


export default App;
