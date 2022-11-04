import { CALC } from "@consts/nav-links";
import { useRouter } from "next/router";
import Link from "next/link";


export const NavCalc = ({ styles, setOpen, isOpen }) => {
  const { pathname } = useRouter();

  const handleActive = () =>
    pathname.includes(CALC)
      ? `${styles.navItem}  ${styles.active}`
      : `${styles.navItem}`;
  const handleClose = () => (setOpen ? setOpen(false) : null);
  return (
    <Link href={CALC}>
      <li className={handleActive()} onClick={handleClose}>
        Calc
      </li>
    </Link>
  );
};
