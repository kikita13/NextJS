import styles from '@styles/Layout/AppBar.module.css'
import { NavButtons } from './NavButtons';
import { NavHome } from './NavHome';


export const AppBar = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <NavHome styles={styles}/>
        <div className={styles.navDivider}/>
        <NavButtons styles={styles}/>
      </ul>
    </nav>
  );
};
