import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import cl from '../styles/Join.module.css'

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className={cl.outerContainer}>
      <div className={cl.innerContainer}>
        <h1 className={cl.heading}>Hello 😊</h1>
        <div className={cl.inputClass}>
          <label 
          style={{color: "#fff"}}
          htmlFor='username'>Enter your username</label>
          <input 
          id='username'
            type="text"
            placeholder='John' 
            className={cl.joinInput}
            onChange={(e) => {setName(e.target.value)}}
            />
        </div>
        <div className={cl.inputClass}>
          <label
          style={{color: "#fff"}}
          htmlFor='roomname'>Enter your roomname</label>
          <input 
            id='roomname'
            type="text"
            placeholder='New room' 
            className={cl.joinInput}
            onChange={(e) => {setRoom(e.target.value)}}
            />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button type='submit' className={cl.button}>SIGN IN</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;