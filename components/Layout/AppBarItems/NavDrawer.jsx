import Image from 'next/image';
import { useState } from 'react';
import { Nav404 } from './Nav404';
import { NavButtons } from './NavButtons';
import { NavHome } from './NavHome';
import { NavRestAPI } from './NavRestAPI';


export const NavDrawer = ( { styles } ) => {
  const [isOpen, setOpen] = useState(false)
  const className = isOpen ? styles.driverItemsActive : styles.driverItems
  const navDrawer = (
    <nav>
      <ul className={styles.nav}>
        <NavHome styles={styles} />
        <div className={styles.navDivider} />
        <div className={styles.navDrawerToggle} onClick={() => setOpen(cur => !cur)}>
          <div className={styles.image}>
            <Image
              alt='drawer toggle'
              src='/menu-list-icon.svg' 
              width={30}
              height={30}
            />
          </div>
          <div className={className}>
            <NavButtons styles={styles} />
            <NavRestAPI styles={styles} />
            <Nav404 styles={styles} />
          </div>
        </div>
      </ul>
    </nav>
  );
  return navDrawer;
};

