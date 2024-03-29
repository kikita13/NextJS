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
    <nav className={styles.navDrawer}>
      <ul className={styles.nav}>
        <NavHome styles={styles}  setOpen={setOpen}/>
        <div className={styles.navDivider} />
        <div className={styles.navDrawerToggle}>
          <div className={styles.image} onClick={() => setOpen(cur => !cur)}>
            <Image
              alt='drawer toggle'
              src='/menu-list-icon.svg' 
              width={30}
              height={30}
            />
          </div>
          <div className={className}>
            <NavButtons styles={styles} isOpen={isOpen} setOpen={setOpen}/>
            <NavRestAPI styles={styles} isOpen={isOpen} setOpen={setOpen}/>
            <Nav404 styles={styles} isOpen={isOpen} setOpen={setOpen}/>
          </div>
        </div>
      </ul>
    </nav>
  );
  return navDrawer;
};

