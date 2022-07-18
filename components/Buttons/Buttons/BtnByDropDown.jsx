import Link from "next/link";


export const BtnByDropDown = ( { styles } ) => {
  return (
    <Link href="/buttons/dropmenu">
      <button className={styles.button}>Drop menu</button>
    </Link>
  );
};
