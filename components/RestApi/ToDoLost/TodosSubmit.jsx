import styles from '@styles/RestAPI/Todos/TodosSubmit.module.css'
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/slices/TodoSlice';


export const TodosSubmit = ( { text, setText } ) => {
  const dispatch = useDispatch()

  return (
    <button 
      className={styles.button} 
      onClick={() => {
        dispatch(addTodo(text));
        setText('')
      }}>
      Add
    </button>
  );
};
