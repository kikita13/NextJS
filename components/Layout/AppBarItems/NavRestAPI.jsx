import Link from "next/link";
import { RESTAPI } from '@consts/nav-links'
import { useRouter } from "next/router";


export const NavRestAPI = ( { styles, setOpen, isOpen } ) => {
  const {pathname} = useRouter();

  const handleActive = () => pathname.includes(RESTAPI) ? `${styles.navItem} ${styles.navDraverItem} ${styles.active}` : `${styles.navItem}`
  const handleClose = () => setOpen ? setOpen(false) : null
  return (
    <Link href={RESTAPI}>
      <li
        className={handleActive()}
        onClick={handleClose}
      >
        API
      </li>
    </Link>
  );
};
