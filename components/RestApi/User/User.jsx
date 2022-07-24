import { UserBody } from "./UserBody/UserBody";
import { UserFooter } from "./UserFooter/UserFooter";
import { UserHeader } from "./UserHeader";


export const User = ( { user, styles } ) => {

  return (
    <div className={styles.content}>
      <UserHeader user={user}/>
      <UserBody user={user}/>
      <UserFooter user={user}/>
    </div>
  )
};
