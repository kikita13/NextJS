import Link from "next/link";
import { BUTTONS } from '@consts/nav-links'
import { useRouter } from "next/router";


export const NavButtons = ( { styles } ) => {
  const {pathname} = useRouter();

  const handleActive = () => pathname.includes(BUTTONS) ? `${styles.navItem}  ${styles.active}` : `${styles.navItem}`

  return (
    <Link href={BUTTONS}>
      <li
        className={handleActive()}
      >
        Buttons
      </li>
    </Link>
  );
};
