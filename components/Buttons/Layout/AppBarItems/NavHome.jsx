import { HOME } from "@consts/nav-links";
import Link from "next/link";

export const NavHome = ( { styles } ) => {
  return (
    <Link href={HOME}>
      <li
        className={
          `${styles.navLogo} ${styles.navItem}`
      }>
        Home
      </li>
    </Link>
  );
};
