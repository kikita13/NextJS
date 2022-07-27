import { TodosInput } from "./TodosInput";
import { TodosList } from "./TodosList";
import { TodosSubmit } from "./TodosSubmit";


export const ToDo = ( props ) => {
  const {styles, todos, setTodos, inputValue, setInputValue, submit} = props
  console.log(inputValue, todos);
  return (
    <div className={styles.content}>
      <div className={styles.form}>
        <TodosInput setInputValue={setInputValue}/>
        <TodosSubmit submit={submit} todos={todos}/>
      </div>
      <TodosList todos={todos} inputValue={inputValue}/>
    </div>
  );
};
