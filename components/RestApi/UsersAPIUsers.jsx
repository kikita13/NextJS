import { RESTAPI } from "@consts/nav-links";
import stylesUsers from "@styles/RestAPI/UsersAPIUsers.module.css";
import Link from "next/link";

export const UsersAPIUsers = ({ usersData }) => {
  return (
    <div className={stylesUsers.users}>
      {usersData.map((user) => (
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
