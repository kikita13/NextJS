import { UsersAPIBtn } from "./UsersAPIBtn";

export const UsersAPI = ( { styles, usersData, setUsersData, users } ) => {

  

  return (
    <div className={styles.content}>
      <UsersAPIBtn setUsersData={setUsersData} users={users} usersData={usersData}/>
      <div></div>
    </div>
  );
};
