import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter2() {
  const count = useSelector(state => state.counter2);
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2>Counter 2: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT_COUNTER2' })}>+</button>
    </div>
  );
}

export default Counter2;
