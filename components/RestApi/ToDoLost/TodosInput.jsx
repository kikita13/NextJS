import styles from '@styles/RestAPI/Todos/TodosInput.module.css'


export const TodosInput = ( { setInputValue } ) => {
  
  return (
    <input 
      placeholder='Enter todo' 
      className={styles.input} 
      onChange={e => setInputValue(e.target.value)}/>
  );
};
