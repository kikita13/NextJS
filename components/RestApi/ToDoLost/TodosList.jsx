import { useDispatch, useSelector } from "react-redux";
import styles from '@styles/RestAPI/Todos/TodosList.module.css'
import { DelTodo } from "./DelTodo";
import { DoneTodo } from "./DoneTodo";
import { removeTodo } from "store/slices/TodoSlice";


export const TodosList = () => {
  const todos = useSelector(state => state.todos.todoList)
  return (
    <div className={styles.content}>
      <div className={styles.list}>
        {todos.map((todo) => 
          <div key={todo.id} className={styles.item}>
            <div className={todo.completed == true ? styles.itemTextDone : styles.itemText}>
              {todo.text}
            </div>
            <div className={styles.actions}>
              <DelTodo id={todo.id}/>
              <DoneTodo id={todo.id}/>
            </div>
          </div>)}
      </div>
    </div>
  );
};
