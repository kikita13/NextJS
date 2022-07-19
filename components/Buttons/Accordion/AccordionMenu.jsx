import styles from '@styles/Accordion/AccordionMenu.module.css'


export const AccordionMenu = ( { isOpen } ) => {

  return (
    <div className={isOpen ? styles.dropMenu : styles.none}>
      Yes! you have open an accordion menu!
    </div>
  );
};
