import './App.css';
import {Greet} from './components/Greet.js';
import {Message} from './components/Message.js';
import {ClickHandler, clickHandler} from './components/ClickHandler.js';

function App() {
  return (
    <div className="App">

     {/* <Greet name='Bruce' heroName='Batman'/>
     <Greet name='Nick' heroName='Superman'>
       <button>Action</button>
     </Greet>
     <Greet name='Diana' heroName='Wonder Woman'>
       <p>This is children props</p>
     </Greet> 
     <Message></Message> */}
     <ClickHandler></ClickHandler>
    </div>
    
  )
}

export default App
