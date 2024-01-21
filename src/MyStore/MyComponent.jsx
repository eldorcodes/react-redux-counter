import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from './MyStore';

export default function MyComponent() {
    const dispatch = useDispatch();

    const username = useSelector((state) => {
        console.log('state',state);
        return state.user.name;
    });

    const email = useSelector((state) => {
        return state.user.email;
    })

    console.log('username',username);


  return (
    <div>
        <h1>{username}</h1>
        <h2>{email}</h2>
        <button onClick={() => dispatch(updateName())}>Change name</button>
    </div>
  )
}
