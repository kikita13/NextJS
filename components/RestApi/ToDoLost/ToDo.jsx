import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodosInput } from "./TodosInput";
import { TodosList } from "./TodosList";
import { TodosSubmit } from "./TodosSubmit";
import { addTodo } from "store/slices/TodoSlice";

export const ToDo = ( { styles } ) => {
  const [text, setText] = useState('')
  
  return (
    <div className={styles.content}>
      <div className={styles.form}>
        <TodosInput setText={setText} text={text}/>
        <TodosSubmit setText={setText} text={text}/>
      </div>
      <TodosList/>
    </div>
  );
};
