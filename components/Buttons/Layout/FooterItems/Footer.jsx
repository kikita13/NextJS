import styles from '@styles/Layout/Footer.module.css'
import { GitHub } from './GitHub';
import { HhRu } from './HhRu';


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <GitHub styles={styles}/>
        <HhRu styles={styles}/>
      </div>
    </footer>
  );
};
