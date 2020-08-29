import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

const ChatScreen = () => {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([
        {
            name: "Ivana",
            image: "https://i.redd.it/7ce1skkppbu31.jpg",
            message: "Whats up?"
        },
        {
            name: "Ivana",
            image: "https://i.redd.it/7ce1skkppbu31.jpg",
            message: "Miss you?"
        },
        {
            message: "Miss you too"
        },

    ]);

    const renderMessages = () =>{
        return messages.map(message=>{
            return (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                        className="chatScreen__avatar"
                        alt={message.name}
                        src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            )
        })
    }

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}])
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Ivana on 31/07/2018</p>
            {renderMessages()}
            
            <form className="chatScreen__input">
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatScreen__inputField" 
                placeholder="Type a message..."
                type="text"
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
            
        </div>
    )
}

export default ChatScreen
