import { createStore } from 'redux';

const initialState = {
  counter1: 0,
  counter2: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER1':
      return { ...state, counter1: state.counter1 + 1 };
    case 'INCREMENT_COUNTER2':
      return { ...state, counter2: state.counter2 + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
