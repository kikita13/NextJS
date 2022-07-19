import styles from '@styles/Layout/AppBar.module.css'
import { NavButtons } from './NavButtons';
import { NavHome } from './NavHome';
import { NavRestAPI } from './NavRestAPI';


export const AppBar = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <NavHome styles={styles}/>
        <div className={styles.navDivider}/>
        <NavButtons styles={styles}/>
        <NavRestAPI styles={styles}/>
      </ul>
    </nav>
  );
};
