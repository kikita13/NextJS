import { TOOLTIP } from "@consts/nav-links";
import Link from "next/link";


export const BtnByToolTip = ({ styles }) => {
  return (
    <Link href={TOOLTIP}>
      <button className={styles.button}>Tool tip</button>
    </Link>
  );
};
