import { NOT_FOUND_PAGE } from "@consts/nav-links";
import Link from "next/link";
import { useRouter } from "next/router";


export const Nav404 = ( { styles } ) => {
  const {pathname} = useRouter();

  const handleActive = () => pathname.includes(NOT_FOUND_PAGE) ? `${styles.navItem}  ${styles.active}` : `${styles.navItem}`

  return (
    <Link href={NOT_FOUND_PAGE}>
      <li
        className={handleActive()}
      >
        REST API
      </li>
    </Link>
  );
};
