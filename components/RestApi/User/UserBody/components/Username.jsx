import Image from "next/image";

export const Username = ( { user, styles } ) => {
  const { username } = user
  return (
    <div  className={styles.grid}>
      <span className={styles.bodyText + styles.bodyTitle}>
        Username
      </span>
      <Image
        src='/arrow-right.svg'
        height = {16}
        width = {16}
      />
      <span className={styles.bodyText + styles.bodyValue}>
        {username}
      </span>
    </div>
  );
};