import Link from "next/link";
import { BUTTONS } from '@consts/nav-links'
import { useRouter } from "next/router";


export const NavButtons = ( { styles, setOpen, isOpen } ) => {
  const {pathname} = useRouter();

  const handleActive = () => pathname.includes(BUTTONS) ? `${styles.navItem}  ${styles.active}` : `${styles.navItem}`
  const handleClose = () => setOpen ? setOpen(false) : null
  return (
    <Link href={BUTTONS}>
      <li
        className={handleActive()}
        onClick={handleClose}
      >
        Buttons
      </li>
    </Link>
  );
};
