import { ToolTip } from '@components/Buttons/ToolTip/ToolTip';
import styles from '@styles/ToolTip/ToolTip.module.css'
import { useRouter } from 'next/router';


const tooltip = () => {
  return (
      <div className={styles.container}>
        <ToolTip/>
        <ToolTip/>
      </div>
    );
};

export default tooltip;