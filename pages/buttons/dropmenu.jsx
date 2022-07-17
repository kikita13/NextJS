import { DropDown } from "@components/Buttons/DropDown/DropDown";
import Head from "next/head";
import styles from '@styles/DropDown/DropDown.module.css'

const index = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Drop menu</title>
      </Head>
      <DropDown />
      <DropDown />
    </div>
  );
};

export default index;