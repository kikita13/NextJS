import { HomePage } from "@components/HomePage/HomePage";
import Head from "next/head";
import styles from '@styles/HomePage/HomePage.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>
      <HomePage styles={styles}/>
    </div>
  );
};

export default index;