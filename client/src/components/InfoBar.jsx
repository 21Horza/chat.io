import React from 'react'
import cl from '../styles/InfoBar.module.css'
import {RiInformationLine} from "react-icons/ri"
import {AiOutlineCloseCircle} from "react-icons/ai"

const InfoBar = ({roomName}) => {
  return (
    <div className={cl.infoBar}>
        <div className={cl.leftInnerContainer}>
          <RiInformationLine className={cl.leftIcon} />
            <h3 className={cl.roomName}>{roomName}</h3>
        </div>
        <div className={cl.rightInnerContainer}>
            <a href="/">
              <AiOutlineCloseCircle className={cl.rightIcon} />
            </a>
        </div>
    </div>
  )
}

export default InfoBar