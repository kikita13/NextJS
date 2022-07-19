import styles from '@styles/Accordion/AccordionBtn.module.css'


export const AccordionBtn = ( { setIsOpen, isOpen } ) => {
  return (
    <button className={isOpen ? styles.activeButton : styles.button} onClick={() => setIsOpen(current => !current)}>
      Click me!
    </button>
  );
};
