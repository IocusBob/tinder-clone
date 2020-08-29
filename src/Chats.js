import React from 'react'
import './Chats.css';

import Chat from './Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
            name="Ivana"
            message="Ill call you when I am ready"
            timestamp="10 mins ago"
            profilePic="https://i.redd.it/7ce1skkppbu31.jpg"
            />
        </div>
    )
}

export default Chats
