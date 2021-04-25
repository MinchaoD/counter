
import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions/action';

function App() {
  const counter = useSelector (state => state.counterReducer);
  const isLogged = useSelector (state => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? <h3> can not show </h3> : ''}
 
    </div>
  );
}

export default App;
