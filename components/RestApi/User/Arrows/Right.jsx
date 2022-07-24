import Image from "next/image";
import Link from "next/link";

export const Right = (props) => {
  return (
    <Link href={props.next.toString()}>
      <div className={props.handleMaxValueUsers()}>
        <Image src="/arrow-bar-right.svg" width={50} height={50} />
      </div>
    </Link>
  );
};
