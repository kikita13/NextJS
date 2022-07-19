import { NotFoundPage } from '@components/NotFoundPage/NotFoundPage';
import styles from '@styles/NotFoundPage/NotFoundPage.module.css'
import Head from 'next/head';

const Error = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page not found</title>
      </Head>
      <NotFoundPage styles={styles}/>
    </div>
  );
};

export default Error;