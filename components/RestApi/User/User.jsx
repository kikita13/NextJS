import { USER_API } from "@consts/out-links";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserBody } from "./UserBody/UserBody";
import { UserFooter } from "./UserFooter/UserFooter";
import { UserHeader } from "./UserHeader";


export const User = ( { user, styles } ) => {
  const prev = user.id - 1;
  const next = user.id + 1;
  const handleMaxValueUsers = () => user.id >= 10 ? styles.buttonsRightNone : styles.buttonsRight;
  const handleMinValueUsers = () => user.id <= 1 ? styles.buttonsLeftNone : styles.buttonsLeft;
  
  return (
    <div className={styles.content}>
      <div className={styles.buttons}>
        <Link href={prev.toString()}>
          <div className={handleMinValueUsers()}>
          <Image
            src='/arrow-bar-left.svg'
            width={50}
            height={50}
            />
          </div>
        </Link>
        <Link href={next.toString()} className={styles.buttonsRight}>
        <div className={handleMaxValueUsers()}>
          <Image
            src='/arrow-bar-right.svg'
            width={50}
            height={50}
            />
          </div>
        </Link>
      </div>
      <UserHeader user={user}/>
      <UserBody user={user}/>
      <UserFooter user={user}/>
    </div>
  )
};
