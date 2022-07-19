import Link from "next/link";


export const BtnByAccordion = ( { styles } ) => {
  return (
    <Link href="/buttons/accordions">
      <button className={styles.button}>Accordions</button>
    </Link>
  );
};
