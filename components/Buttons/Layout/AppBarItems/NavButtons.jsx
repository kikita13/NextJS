import Link from "next/link";
import { BUTTONS } from '@consts/nav-links'
import { useRouter } from "next/router";


export const NavButtons = ( { styles } ) => {
  const {pathname} = useRouter();

  return (
    <Link href={BUTTONS}>
      <li
        className={pathname == '/buttons' ? `${styles.navItem}  ${styles.active}`: styles.navItem}
      >
        Buttons
      </li>
    </Link>
  );
};
