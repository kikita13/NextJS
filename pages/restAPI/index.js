import { Buttons } from '@components/RestApi/Buttons';
import React from 'react';
import styles from '@styles/RestAPI/Buttons.module.css'
import Head from 'next/head';


const index = () => {
  return (
    <div className={styles.content}>
    <Head>
      <title>Rest API</title>
    </Head>
      <Buttons styles={styles}/>
    </div>
  );
};

export default index;