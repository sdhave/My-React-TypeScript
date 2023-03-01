import { BiX } from 'react-icons/bi';
import { BiChat } from 'react-icons/bi';


import './ChatHead.css'

export default function ChatHead() {
    return (
        <div className='chat-head'>
            <div className='chat-title'>
                <BiChat className='icon' />
                <span>Chat Window</span>
            </div>
            <BiX className='icon' />
        </div>
    )
}