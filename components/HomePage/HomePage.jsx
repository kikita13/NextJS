import styles from '@styles/HomePage/HomePage.module.css'
import Link from 'next/link';
import { GIT_HUB } from '@consts/out-links';
import Image from 'next/image';

export const HomePage = () => {

  

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src='/github-icon.svg'
        layout='fill'
        placeholder="blur"
        blurDataURL='base64'
        alt='GitHub icon'
        />
        <Link href={GIT_HUB}>
          <button className={styles.button}>
            My GitHub
          </button>
        </Link>
    </div>
  );
};
