import Link from "next/link";


export const BtnByToolTip = ({ styles }) => {
  return (
    <Link href="/buttons/tooltip">
      <button className={styles.button}>Tool tip</button>
    </Link>
  );
};
