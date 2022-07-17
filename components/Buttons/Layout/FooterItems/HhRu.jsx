import { HH_RU } from "@consts/out-links";
import Link from "next/link";
import Image from "next/image";


export const HhRu = ( { styles } ) => {
  return (
    <div className={styles.item}>
      <Link href={HH_RU}>
        <div className={styles.itemContent}>
        <Image
          className={styles.itemLogo}
          alt='hh.ru summary'
          width={25}
          height={25}
          src='/hh-ru.svg'
        />
        <div className={styles.itemText}>hh.ru</div>
        </div>
      </Link>
    </div>
  );
};
