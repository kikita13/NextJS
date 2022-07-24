import styles from '@styles/RestAPI/User/UserBody.module.css'
import { Address } from './components/Address/Address';
import { Username } from './components/Username';


export const UserBody = ( { user } ) => {
  
  return (
    <div className={styles.content}>
      <Username user={user} styles={styles} />
      <Address user={user} styles={styles} />
    </div>
  );
};


