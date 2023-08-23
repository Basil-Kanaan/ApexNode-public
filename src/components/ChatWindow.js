import React, {useRef, useState} from 'react';
import {Button, Paper, TextField, Typography} from '@mui/material';

const ChatWindow = ({conversation}) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        setMessages([...messages, {text: message, sender: 'user'}]);
        setMessage('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <Paper elevation={3} style={{padding: '1rem', height: '100%'}}>
            <Typography variant="h5">{conversation.name}</Typography>
            <div style={{maxHeight: '70vh', overflowY: 'auto', marginTop: '1rem'}}>
                {messages.map((msg, index) => (
                    <div key={index} style={{textAlign: msg.sender === 'user' ? 'right' : 'left'}}>
                        <Typography variant="body1" style={{
                            backgroundColor: msg.sender === 'user' ? '#2196F3' : '#f0f0f0',
                            padding: '0.5rem',
                            borderRadius: '5px',
                            marginBottom: '0.5rem',
                            display: 'inline-block',
                            maxWidth: '70%'
                        }}>
                            {msg.text}
                        </Typography>
                    </div>
                ))}
            </div>
            <div style={{display: 'flex', marginTop: '1rem'}}>
                <TextField
                    inputRef={inputRef}
                    variant="outlined"
                    placeholder="Type a message..."
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage} style={{marginLeft: '1rem'}}>
                    Send
                </Button>
            </div>
        </Paper>
    );
};

export default ChatWindow;
