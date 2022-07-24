import styles from '@styles/RestAPI/User/UserFooter.module.css'
import { Email } from './Email';
import { Phone } from './Phone';


export const UserFooter = ( { user } ) => {
  return (
    <div className={styles.footer}>
      <Email user={user} styles={styles} />
      <Phone user={user} styles={styles} />
    </div>
  );
};
