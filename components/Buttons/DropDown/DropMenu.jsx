import styles from '@styles/DropDown/DropMenu.module.css'

export const DropMenu = ({isOpen}) => {
  return (
    <div
      className={isOpen ? styles.dropMenu : styles.none} 
      >
      It is a menu drop text
    </div>
  );
};
