import { UsersAPIBtn } from "./UsersAPIBtn";
import { UsersAPIUsers } from "./UsersAPIUsers";


export const UsersAPI = ( { styles, usersData, setUsersData, users } ) => {

  return (
    <div className={styles.content}>
      <UsersAPIBtn 
        setUsersData={setUsersData} 
        users={users} 
        usersData={usersData}
      />
      <UsersAPIUsers usersData={usersData}/>
    </div>
  );
};
