import { ToDo } from '@components/RestApi/ToDoLost/ToDo';
import React, { useState } from 'react';
import styles from '@styles/RestAPI/Todos/Todos.module.css'


const index = () => {
  const [todos, setTodos] = useState(['hello']);
  const [inputValue, setInputValue] = useState('')
  const submit = () => todos.push(inputValue)
  return (
    <div className={styles.container}>
      <ToDo 
        styles={styles} 
        todos={todos} 
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}  
        submit={submit}
      />
    </div>
  );
};

export default index;