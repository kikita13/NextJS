import Image from "next/image";

export const Phone = ( { user, styles } ) => {
  return (
    <div className={styles.grid}>
      <span className={styles.footerText + styles.footerTitle}>
        Phone
      </span>
      <Image
        src='/arrow-right.svg'
        height = {16}
        width = {16}
      />
      <span className={styles.footerText + styles.footerValue}>
        {user.phone}
      </span>
    </div>
  );
};
