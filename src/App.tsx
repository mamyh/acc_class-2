import React, { useCallback, useReducer, useRef } from 'react';

import './App.css';


// const Box: React.FunctionComponent<{ title: string }> = ({ title }) => {
//   return <div></div>
// }
interface todo {
  id: number,
  text: string
}
type actionType = { type: "ADD", text: string } | { type: "REMOVE", id: number }
function App() {
  function reducer(state: todo[], action: actionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text
          }
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id)
    }
  }
  const [todos, dispatch] = useReducer(reducer, []); //todos=[{},{},{}]
  const newRef = useRef<HTMLInputElement>(null);
  // usecallback
  const addTodo = useCallback(() => {
    if (newRef.current) {
      dispatch({
        type: 'ADD',
        text: newRef.current.value,
      });
      newRef.current.value = "";
    }
  }, []);

  return (
    <div className="App">
      {/* <Box title='hello'>dfdsfhgrthsfgs</Box> */}
      {/* <Lists /> */}
      <input type="text" ref={newRef} />
      <button onClick={addTodo}>Add</button>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}

            <button onClick={() => dispatch({ type: 'REMOVE', id: todo.id })}> X</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
