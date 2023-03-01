import './Chat.css'

import Message from '../Message/Message'
import ChatHead from '../ChatHead/ChatHead';
import Input from '../Input/Input'
import Send from '../Send/Send'

export default function App() {
    return (
       <div>  
            <ChatHead />
            <div className='msg-container'>
                <Message />
            </div>
            <div className='send-container'>
                <Input />
                <Send />
            </div>
        </div>
     )
}