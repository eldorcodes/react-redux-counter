import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './CounterState';

export default function CounterPage() {
    const dispatch = useDispatch();

    const count = useSelector((state) => {
        console.log('state',state);
        return state.count.value
    });

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment + </button>
        <button onClick={() => dispatch(decrement())}>Decrement - </button>
    </div>
  )
}
