import styles from '@styles/Layout/AppBar.module.css'
import { NavMain } from './NavMain';
import { NavDrawer } from './NavDrawer';


export const AppBar = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : null
  

  return width > 350 ? <NavMain styles={styles}/> : <NavDrawer styles={styles}/>
     
};
