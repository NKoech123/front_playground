import {useState} from 'react'

export const Message = () => {
    //https://www.youtube.com/watch?v=jLS0TkAHvRg
    const [message,setMessage] = useState('Welcome Visitor')
    //const newMessage= 'Thank you for subscribing!'
    return (
    <div>
        <h1>
            {message}
        </h1>
        
        <button onClick={()=> setMessage('Thank you for subscribing!')}>
            Subscribe 
        </button>
    </div>)
}