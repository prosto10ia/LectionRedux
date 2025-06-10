import React from 'react';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Sum from './components/Sum';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Redux Counters</h1>
      <Counter1 />
      <Counter2 />
      <Sum />
    </div>
  );
}

export default App;
