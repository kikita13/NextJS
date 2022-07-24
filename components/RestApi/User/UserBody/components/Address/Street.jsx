import Image from "next/image";

export const Street = ( { user, styles } ) => {
  const {street} = user.address
  return (
    <div className={styles.grid}>
      <span className={styles.bodyText + styles.bodyTitle}>
        Street
      </span>
      <Image
        src='/arrow-right.svg'
        height = {16}
        width = {16}
      />
      <span className={styles.bodyText + styles.bodyValue}>
        {street}
      </span>
    </div>
  );
};