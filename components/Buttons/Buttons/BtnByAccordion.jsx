import { ACCORDIONS } from "@consts/nav-links";
import Link from "next/link";


export const BtnByAccordion = ( { styles } ) => {
  return (
    <Link href={ACCORDIONS}>
      <button className={styles.button}>Accordions</button>
    </Link>
  );
};
