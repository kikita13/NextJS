import styles from '@styles/ToolTip/ToolTip.module.css'
import { ToolTipBtn } from './ToolTipBtn';
import { ToolTipMenu } from './ToolTipMenu';


export const ToolTip = () => {

  

  return (
    <div className={styles.content}>
      <ToolTipBtn/>
      <ToolTipMenu/>
    </div>
  );
};
