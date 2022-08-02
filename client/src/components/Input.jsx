import React from 'react'
import cl from '../styles/Input.module.css'

const Input = ({message, setMessage, sendMessage}) => {
  return (
    <form action="" className={cl.form}>
        <input 
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? sendMessage(e) : null}
            className={cl.input}
            type="text"
         />
        <button 
            onClick={e => sendMessage(e)}
        >
            SEND
        </button>
    </form>
  )
}

export default Input