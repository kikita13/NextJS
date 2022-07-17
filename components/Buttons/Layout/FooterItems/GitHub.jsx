import { GIT_HUB } from "@consts/out-links";
import Link from "next/link";
import Image from "next/image";

export const GitHub = ( { styles } ) => {
  return (
    <div className={styles.item}>
      <Link href={GIT_HUB}>
        <div className={styles.itemContent}>
        <Image
          className={styles.itemLogo}
          alt='hh.ru summary'
          width={25}
          height={25}
          src='/github-icon.svg'
        />
        <div className={styles.itemText}>GitHub</div>
        </div>
      </Link>
    </div>
  );
};
