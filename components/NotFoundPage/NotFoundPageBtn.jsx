import { HOME } from "@consts/nav-links";
import Link from "next/link";
import styles from '@styles/NotFoundPage/NotFoundPageBtn.module.css'


export const NotFoundPageBtn = () => {
  return (
    <Link href={HOME}>
      <button className={styles.button}>
        Back to homepage
      </button>
    </Link>

  );
};
