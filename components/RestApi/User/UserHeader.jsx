import styles from '@styles/RestAPI/User/UserHeader.module.css'


export const UserHeader = ( { user } ) => {
  return (
    <div className={styles.header}>
      {user.name}
    </div>
  );
};
