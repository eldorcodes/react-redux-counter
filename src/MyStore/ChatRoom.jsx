import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, getMessages, sendMessage } from './MyStore';

export default function ChatRoom() {
    const dispatch = useDispatch();

    const messages = useSelector((state) => {
        console.log('state',state);
        return state.chat.messages;
    });

    const state = useSelector((state) => {
        return state.chat.bookArray;
    });

    console.log('chatRoom state',state);
    
  return (
    <div>
        <h1>Chat Room</h1>
        {
            messages?.map((message,index) => (
                <p key={index}>{message}</p>
            ))
        }

        <button onClick={() => dispatch(sendMessage())}>Send</button>
        <button onClick={() => dispatch(fetchBooks())}>Fetch Books</button>

        
        <br />
        {
            state?.chat?.bookArray?.map((book,index) => (
                <p key={index}>{book?.volumeInfo?.title}</p>
            ))
        }
    </div>
  )
}
