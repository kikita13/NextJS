import { Nav404 } from './Nav404';
import { NavButtons } from './NavButtons';
import { NavHome } from './NavHome';
import { NavRestAPI } from './NavRestAPI';


export const NavMain = ( { styles } ) => {
  const navMain = (
    <nav>
      <ul className={styles.nav}>
        <NavHome styles={styles}/>
        <div className={styles.navDivider}/>
        <NavButtons styles={styles}/>
        <NavRestAPI styles={styles}/>
        <Nav404 styles={styles}/>
      </ul>
  </nav>
  );
  return navMain  
};
