import styles from '@styles/RestAPI/SearchUsersAPI.module.css'


export const SearchUsersAPI = ( { setFilterUsers, usersData } ) => {
  const handleActive = usersData == "" ? styles.input : styles.inputActive;
  return (
    <input 
      className={handleActive} 
      onChange={(e) => setFilterUsers(e.target.value)}
      placeholder='start typing...'
    >
      
    </input>
  );
};
