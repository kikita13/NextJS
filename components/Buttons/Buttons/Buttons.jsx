import styles from '@styles/Buttons.module.css'
import { BtnByAccordion } from './BtnByAccordion';
import { BtnByDropDown } from "./BtnByDropDown";
import { BtnByToolTip } from './BtnByToolTip';


export const Buttons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BtnByDropDown styles={styles}/>
        <BtnByToolTip styles={styles}/>
        <BtnByAccordion styles={styles}/>
      </div>
    </div>
  );
};
