import Image from "next/image";

export const Email = ( { user, styles } ) => {
  
  return (
    <div className={styles.grid}>
      <span className={styles.footerText + styles.footerTitle}>
        E-mail
      </span>
      <Image
        src='/arrow-right.svg'
        height = {16}
        width = {16}
      />
      <span className={styles.footerText + styles.footerValue}>
        {user.email}
      </span>
    </div>
  );
};
