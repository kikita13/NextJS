import styles from '@styles/RestAPI/SearchUsersAPI.module.css'


export const SearchUsersAPI = ( { setFilterUsers } ) => {
  
  return (
    <input 
      className={styles.input} 
      onChange={(e) => setFilterUsers(e.target.value)}
      placeholder='start typing...'
    >
      
    </input>
  );
};
