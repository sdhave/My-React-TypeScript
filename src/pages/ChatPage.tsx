//import Chat from '../components/Chat/Chat'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

let socket;
export default function ChatPage() {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'https://chat-server.simbarashemapip.repl.co'

    useEffect(() => {

        socket = io(ENDPOINT, { transports: ['websocket'] })

        socket.on('connection', () => {

        })

        return () => {
            socket.emit('disconnnect')
            socket.off()
        }

    }, [ENDPOINT]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (e) => {
        e.preventDefault()

        if (message) {
            socket.emit('chatmessage', { message: message }, () => {
                //setMessages([...messages, { message: message, user: "You" }])
                //setMessage('')
            })
            setMessage('')
        }
    }
    return (
        <div className='container'>
            <h2 className="page-title">Chat Room</h2>
            <div className="chat-container">
                <Clients />
                <div className="chat-window">
                    <div className='msgs-con'>
                        {messages.map((data, i) =>
                            <Message key={i} message={data.message} />
                        )}
                    </div>
                    <div className='b send-con'>
                        <input
                            type="text"
                            className="msg-input"
                            placeholder="Type here ..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="send-btn"
                            onClick={(e) => sendMessage(e)}
                        >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Clients() {
    return (
        <div className="clients">
            <div>
                <h5>Simbarashe Dhave</h5>
                <p>Online</p>
            </div>
            <div>
                <h5>Simbarashe Dhave</h5>
                <p>Online</p>
            </div>
        </div>
    )
}

function Message({ message }) {
    return (
        <div className="msg">
            <p>{message}</p>
            <span>12:02</span>
        </div>
    )
}