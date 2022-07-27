import styles from '@styles/RestAPI/Todos/TodosSubmit.module.css'


export const TodosSubmit = ( { inputValue, todos, submit } ) => {
  
  return (
    <button className={styles.button} onClick={() => submit(inputValue)}>
      Add
    </button>
  );
};
