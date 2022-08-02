import React, {useState, useEffect} from 'react';
import queryString from 'query-string'; // retrieve data from url
import io from "socket.io-client";
import cl from '../styles/Chat.module.css'
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  
  const ENDPOINT = process.env.REACT_APP_API_URI;
  
  useEffect(() => {
    const {name, room} = queryString.parse(window.location.search);
    
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {

    });

    return () => {
      socket.disconnect();

      socket.off();
    }
  }, []);


  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }


  return (
    <div className={cl.outerContainer}>
      <div className={cl.container}>
        <InfoBar roomName={room}/>
        <Messages 
          messages={messages} 
          name={name}/>
        <Input 
          message={message} 
          setMessage={setMessage}
          sendMessage={sendMessage}
          />
      </div>
    </div>
  )
}

export default Chat