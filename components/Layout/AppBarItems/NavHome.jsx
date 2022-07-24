import { HOME } from "@consts/nav-links";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavHome = ( { styles, setOpen } ) => {
  const {pathname} = useRouter();
  const handleActive = () => pathname == '/' ? `${styles.navItem}  ${styles.active}` : `${styles.navItem}`
  const handleClose = () => setOpen ? setOpen(false) : null
  return (
    <Link href={HOME}>
      <li
        className={handleActive()} 
        onClick={handleClose}
      >
        Home
      </li>
    </Link>
  );
};
