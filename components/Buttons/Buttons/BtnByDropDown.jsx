import { DROPMENU } from "@consts/nav-links";
import Link from "next/link";


export const BtnByDropDown = ( { styles } ) => {
  return (
    <Link href={DROPMENU}>
      <button className={styles.button}>Drop menu</button>
    </Link>
  );
};
