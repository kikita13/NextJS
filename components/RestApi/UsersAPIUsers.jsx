import stylesUsers from '@styles/RestAPI/UsersAPIUsers.module.css'


export const UsersAPIUsers = ( { usersData } ) => {
  return (
    <div className={stylesUsers.users}>
      {usersData.map((user) => (
        <div 
          key={user.id}
          className={stylesUsers.user}>
            <p>{user.name}</p>
            <p>{user.email}</p>            
        </div>
      ))}
    </div>
  );
};
