import styles from '@styles/Buttons.module.css'
import { BtnByDropDown } from "./BtnByDropDown";
import { BtnByToolTip } from './BtnByToolTip';


export const Buttons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BtnByDropDown styles={styles}/>
        <BtnByToolTip styles={styles}/>
      </div>
    </div>
  );
};
