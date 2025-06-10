import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter1() {
  const count = useSelector(state => state.counter1);
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2>Counter 1: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT_COUNTER1' })}>+</button>
    </div>
  );
}

export default Counter1;
