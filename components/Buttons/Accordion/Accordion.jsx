import styles from '@styles/Accordion/Accordion.module.css'
import { useState } from 'react';
import { AccordionBtn } from './AccordionBtn';
import { AccordionMenu } from './AccordionMenu';


export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.content}>
      <div className={isOpen ? styles.activeContent : styles.content}>
        <AccordionBtn isOpen={isOpen} setIsOpen={setIsOpen}/>
        <AccordionMenu isOpen={isOpen}/>
      </div>
    </div>
  );
};
