import { HOME } from "@consts/nav-links";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavHome = ( { styles } ) => {
  const {pathname} = useRouter();
  return (
    <Link href={HOME}>
      <li
        className={pathname == '/' ? `${styles.navItem}  ${styles.active}`: styles.navItem}>
        Home
      </li>
    </Link>
  );
};
