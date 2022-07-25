import styles from '@styles/RestAPI/Users/UsersAPIBtn.module.css'


export const UsersAPIBtn = ( { setUsersData, users } ) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => setUsersData(users)}>
        Get users from jsonplaceholder      
      </button>
      <button className={styles.button} onClick={() => setUsersData([])}>
        Clear all users      
      </button>
    </div>
  );
};
