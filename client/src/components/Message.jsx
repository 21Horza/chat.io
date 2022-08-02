import React from 'react'
import cl from "../styles/Message.module.css"
import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
    let isSent = false;
    const trimName = name.trim().toLowerCase();

    if (user === trimName) {
        isSent = true
    }

  return (
    isSent 
    ?
    (
        <div className={cl.messageContainer}>
            <p
            className={cl.user}>{trimName}</p>
            <div className={cl.messageBox}>
                <p className={cl.messageText}>{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    )
    :
    (
        
        <div className={cl.messageContainer}>
            <div className={cl.messageBox}>
            <p className={cl.messageText}>{ReactEmoji.emojify(text)}</p>
            </div>
            <p className={cl.admin}>{user}</p>
        </div>

    )
    
  )
}

export default Message