import styles from '../styles/DropDown.module.css'
import { DropMenu } from './DropMenu';
import { useState } from 'react';

export const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <button onClick={() => {setIsOpen(current => !current)}} className={styles.button}>
        click me!
        <DropMenu className={styles.none} isOpen={isOpen} setIsOpen={setIsOpen}/>
      </button>
    </div>
  );
};
