import { REST_API_USERS } from "@consts/nav-links";
import Link from "next/link";

export const BtnByUsers = ( { styles } ) => {
  
  return (
    <Link href={REST_API_USERS}>
      <button className={styles.button}>Users</button>
    </Link>
  );
};
