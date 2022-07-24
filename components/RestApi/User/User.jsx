import { Left } from "./Arrows/Left";
import { Right } from "./Arrows/Right";
import { UserBody } from "./UserBody/UserBody";
import { UserFooter } from "./UserFooter/UserFooter";
import { UserHeader } from "./UserHeader";


export const User = ( { user, styles } ) => {
  const prev = user.id - 1;
  const next = user.id + 1;
  const handleMinValueUsers = () => user.id <= 1 ? styles.buttonsLeftNone : styles.buttonsLeft;
  const handleMaxValueUsers = () => user.id >= 10 ? styles.buttonsRightNone : styles.buttonsRight;
  
  return (
    <div className={styles.content}>
      <div className={styles.buttons}>
        <Left prev={prev} handleMinValueUsers={handleMinValueUsers}/>
        <Right next={next} handleMaxValueUsers={handleMaxValueUsers}/>
      </div>
      <UserHeader user={user}/>
      <UserBody user={user}/>
      <UserFooter user={user}/>
    </div>
  )
};
