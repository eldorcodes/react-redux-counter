import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/Counter';


export default function CounterComponent() {
    const count = useSelector((state) =>{ 
        console.log(state);
        return state.count.count;
    });
    const dispatch = useDispatch();

console.log(count);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
