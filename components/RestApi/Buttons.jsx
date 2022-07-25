import { BtnByToDoList } from "./BtnByToDoList";
import { BtnByUsers } from "./BtnByUsers";



export const Buttons = ( { styles } ) => {
  
  return (
    <div className={styles.buttons}>
      <BtnByUsers styles={styles}/>
      <BtnByToDoList styles={styles}/>
    </div>
  );
};
