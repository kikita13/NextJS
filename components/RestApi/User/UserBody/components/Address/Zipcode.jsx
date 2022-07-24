import Image from "next/image";

export const Zipcode = ( { user, styles } ) => {
  const {zipcode} = user.address
  return (
    <div className={styles.grid}>
      <span className={styles.bodyText + styles.bodyTitle}>
        ZIP-code
      </span>
      <Image
        src='/arrow-right.svg'
        height = {16}
        width = {16}
      />
      <span className={styles.bodyText + styles.bodyValue}>
        {zipcode}
      </span>
    </div>
  );
};