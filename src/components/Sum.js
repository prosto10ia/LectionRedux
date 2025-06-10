import React from 'react';
import { useSelector } from 'react-redux';

function Sum() {
  const counter1 = useSelector(state => state.counter1);
  const counter2 = useSelector(state => state.counter2);
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Sum: {counter1 + counter2}</h2>
    </div>
  );
}

export default Sum;
