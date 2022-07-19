import styles from '@styles/DropDown/DropDown.module.css'
import { DropMenu } from './DropMenu';
import { useState } from 'react';


export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
      <div className={styles.content}>
      <button onClick={() => setIsOpen(current => !current) } className={styles.button}>
        Click me!
      </button>
        <DropMenu className={styles.none} isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
  );
};
