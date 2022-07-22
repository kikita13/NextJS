import Link from "next/link";
import { BUTTONS, RESTAPI } from '@consts/nav-links'
import { useRouter } from "next/router";


export const NavRestAPI = ( { styles } ) => {
  const {pathname} = useRouter();

  const handleActive = () => pathname.includes(RESTAPI) ? `${styles.navItem} ${styles.navDraverItem} ${styles.active}` : `${styles.navItem}`

  return (
    <Link href={RESTAPI}>
      <li
        className={handleActive()}
      >
        API
      </li>
    </Link>
  );
};
