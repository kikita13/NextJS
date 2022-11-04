import { Calc } from '@components/Calculator/Calc';
import Head from 'next/head';
import React, { useState } from 'react';
import styles from '@styles/Calculator/Calculator.module.css'

const index = () => {
  const [value, setValue] = useState('Enter')


  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator</title>
      </Head>
      <Calc styles={styles} value={value}/>
    </div>
  );
};

export default index;