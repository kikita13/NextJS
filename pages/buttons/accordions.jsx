import React from 'react';
import styles from '@styles/Accordion/Accordion.module.css'
import { Accordion } from '@components/Buttons/Accordion/Accordion';
import Head from 'next/head';

const accordions = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drop menu</title>
      </Head>
      <Accordion />
      <Accordion />
    </div>
  );
};

export default accordions;