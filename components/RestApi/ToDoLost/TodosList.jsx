
export const TodosList = ( { todos, inputValue } ) => {
  
  return (
    <div>
      {todos.map((todo, index) => <div key={index} >{todo}</div>)}
    </div>
  );
};
