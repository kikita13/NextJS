import { SearchUsersAPI } from "./SearchUsersAPI";
import { UsersAPIBtn } from "./UsersAPIBtn";
import { UsersAPIUsers } from "./UsersAPIUsers";


export const UsersAPI = ( {
   styles, 
   usersData, 
   setUsersData, 
   users,
   filterUsers,
   setFilterUsers,
   filteredUsers
  } ) => {

  return (
    <div className={styles.content}>
      <UsersAPIBtn 
        setUsersData={setUsersData} 
        users={users} 
        usersData={usersData}
      />
      <SearchUsersAPI setFilterUsers={setFilterUsers}/>
      <UsersAPIUsers filteredUsers={filteredUsers} filterUsers={filterUsers} usersData={usersData}/>
    </div>
  );
};
