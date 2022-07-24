import Image from "next/image";
import Link from "next/link";

export const Left = (props) => {
  return (
    <Link href={props.prev.toString()}>
      <div className={props.handleMinValueUsers()}>
        <Image src="/arrow-bar-left.svg" width={50} height={50} />
      </div>
    </Link>
  );
};
