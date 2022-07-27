import { ToDo } from '@components/RestApi/ToDoLost/ToDo';
import styles from '@styles/RestAPI/Todos/Todos.module.css'


const index = () => {

  return (
    <div className={styles.container}>
      <ToDo styles={styles}/>
    </div>
  );
};

export default index;