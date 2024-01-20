import React from 'react';
import { fetchData } from '../redux/GlobalState';
import { useDispatch, useSelector } from 'react-redux';


export default function DataCOmponent() {
    const data = useSelector((state) => {
        console.log(state.data);
        return state;
    });
    const dispatch = useDispatch();

    console.log('Data came', data);


  return (
    <div>
        <h1>Fetch data</h1>
        <button onClick={() => dispatch(fetchData())}>fetch data</button>
    </div>
  )
}
