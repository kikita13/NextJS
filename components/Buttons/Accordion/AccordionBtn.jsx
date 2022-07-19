import styles from '@styles/Accordion/AccordionBtn.module.css'


export const AccordionBtn = ( { setIsOpen, isOpen } ) => {
  const sOpen = isOpen
  return (
    <button className={styles.button} onClick={() => setIsOpen(current => !current)}>
      Cick me!
    </button>
  );
};
