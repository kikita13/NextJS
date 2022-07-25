import { Buttons } from '@components/RestApi/Buttons';
import React from 'react';
import styles from '@styles/RestAPI/Buttons.module.css'


const index = () => {
  return (
    <div className={styles.content}>
      <Buttons styles={styles}/>
    </div>
  );
};

export default index;