import Image from "next/image";

export const Suite = ( { user, styles } ) => {
  const {suite} = user.address
  return (
    <div className={styles.grid}>
      <span className={styles.bodyText + styles.bodyTitle}>
        Suite
      </span>
      <Image
        src='/arrow-right.svg'
        height = {16}
        width = {16}
      />
      <span className={styles.bodyText + styles.bodyValue}>
        {suite}
      </span>
    </div>
  );
};