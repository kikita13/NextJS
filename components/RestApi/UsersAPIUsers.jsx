import { RESTAPI } from "@consts/nav-links";
import stylesUsers from "@styles/RestAPI/UsersAPIUsers.module.css";
import Link from "next/link";

export const UsersAPIUsers = ({ usersData, filterUsers, filteredUsers }) => {
  return (
    <div className={stylesUsers.users}>
      {filteredUsers.map((user) => (
        <Link href={`${RESTAPI}/${user.id}`} key={user.id}>
          <div className={stylesUsers.user}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
