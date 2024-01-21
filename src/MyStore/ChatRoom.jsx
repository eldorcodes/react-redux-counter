import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, sendMessage } from './MyStore';

export default function ChatRoom() {
    const dispatch = useDispatch();

    const messages = useSelector((state) => {
        console.log('state',state);
        return state.chat.messages;
    });
    
  return (
    <div>
        <h1>Chat Room</h1>
        {
            messages?.map((message,index) => (
                <p key={index}>{message}</p>
            ))
        }

        <button onClick={() => dispatch(sendMessage())}>Send</button>
    </div>
  )
}
