import React, { useState } from 'react';
import { Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
import ChatWindow from "../../components/ChatWindow";

const Messages = () => {
    const [selectedConversation, setSelectedConversation] = useState(null);

    const conversations = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        // Add more conversations
    ];

    const handleConversationClick = (conversation) => {
        setSelectedConversation(conversation);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '30%', borderRight: '1px solid #ccc', padding: '1rem', flexShrink: 0 }}>
                <Typography variant="h5">Conversations</Typography>
                <Divider sx={{ my: 1 }} />
                <List sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
                    {conversations.map((conversation) => (
                        <ListItem
                            button
                            key={conversation.id}
                            onClick={() => handleConversationClick(conversation)}
                            sx={{ borderRadius: '5px', my: 1, backgroundColor: selectedConversation?.id === conversation.id ? '#f0f0f0' : 'inherit' }}
                        >
                            <ListItemText primary={conversation.name} />
                        </ListItem>
                    ))}
                </List>
            </div>
            <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {selectedConversation ? (
                    <ChatWindow conversation={selectedConversation} />
                ) : (
                    <Typography variant="body1" sx={{ alignSelf: 'center' }}>Select a conversation to start chatting</Typography>
                )}
            </div>
        </div>
    );
};

export default Messages;
