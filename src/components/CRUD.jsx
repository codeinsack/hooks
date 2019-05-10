import React, { useContext, useReducer } from 'react';

import { UserContext } from '../index';

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      return {
        count: state.count - 1,
      };
    default:
      return initialState;
  }
}

const Crud = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const person = useContext(UserContext);

  return (
    <div>
      Count: {state.count}
      <div>
        <button className="border m-1 p-1" type="button" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button className="border m-1 p-1" type="button" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    </div>
  );
};

export default Crud;
