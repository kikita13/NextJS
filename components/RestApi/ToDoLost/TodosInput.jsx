import styles from '@styles/RestAPI/Todos/TodosInput.module.css'
import { useDispatch } from 'react-redux';
import { refreshInputValue } from 'store/slices/TodoSlice';


export const TodosInput = ( { setText, text } ) => {

  return (
    <input 
      placeholder='Enter todo' 
      className={styles.input} 
      onChange={(e) => setText(e.target.value)}
      value={text}  
    />
  );
};
