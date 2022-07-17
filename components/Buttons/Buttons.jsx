import Link from "next/link";
import styles from '@styles/Buttons.module.css'


export const Buttons = () => {
  return (
    <div className={styles.container}>
      <div>

      <Link href='/buttons/dropmenu'>
        <button className={styles.button}>Drop menu</button>
      </Link>
      </div>
    </div>
  );
};
