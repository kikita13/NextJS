import Image from "next/image";

export const City = ( { user, styles } ) => {
  const {city} = user.address
  return (
    <div className={styles.grid}>
      <span className={styles.bodyText + styles.bodyTitle}>
        City
      </span>
      <Image
        src='/arrow-right.svg'
        height = {16}
        width = {16}
      />
      <span className={styles.bodyText + styles.bodyValue}>
        {city}
      </span>
    </div>
  );
};