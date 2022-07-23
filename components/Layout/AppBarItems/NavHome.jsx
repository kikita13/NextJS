import { HOME } from "@consts/nav-links";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavHome = ( { styles, setOpen } ) => {
  const {pathname} = useRouter();
  const handleActive = () => pathname == '/' ? `${styles.navItem}  ${styles.active}` : `${styles.navItem}`

  return (
    <Link href={HOME}>
      <li
        className={handleActive()}
        onClick={() => setOpen(cur => false)}  
      >
        Home
      </li>
    </Link>
  );
};
