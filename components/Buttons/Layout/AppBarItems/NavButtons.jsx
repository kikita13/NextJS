import Link from "next/link";
import { BUTTONS } from '@consts/nav-links'


export const NavButtons = ( { styles } ) => {
  return (
    <Link href={BUTTONS}>
      <li
        className={styles.navItem}
      >
        Buttons
      </li>
    </Link>
  );
};
