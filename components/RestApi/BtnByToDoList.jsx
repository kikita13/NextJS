import { REST_API_TODOLIST } from "@consts/nav-links";
import Link from "next/link";

export const BtnByToDoList = ( { styles } ) => {
  
  return (
    <Link href={REST_API_TODOLIST}>
      <button className={styles.button}>Todo list</button>
    </Link>
  );
};
