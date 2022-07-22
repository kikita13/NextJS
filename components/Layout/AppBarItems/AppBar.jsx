import styles from '@styles/Layout/AppBar.module.css'
import { NavMain } from './NavMain';
import { NavDrawer } from './NavDrawer';
import { useWindowSize } from '@consts/hooks';



export const AppBar = () => {

  const size= useWindowSize();

  return size.width > 400 ? <NavMain styles={styles}/> : <NavDrawer styles={styles}/>
    
};
