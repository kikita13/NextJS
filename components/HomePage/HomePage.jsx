import Link from 'next/link';
import { GIT_HUB } from '@consts/out-links';
import Image from 'next/image';

export const HomePage = ( { styles } ) => {

  return (
    <div className={styles.content}>
      <Image
        src='/github-icon.svg'
        layout='fill'
        alt='GitHub icon'
        style={{ marginTop: 10 }}
      />
      <Link href={GIT_HUB}>
        <button className={styles.button}>
          My GitHub
        </button>
      </Link>
    </div>
  );
};
