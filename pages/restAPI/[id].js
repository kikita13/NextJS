import { USERS_API } from '@consts/out-links';
import React from 'react';


export const getStaticPaths = async () => {
  const getData = await fetch(USERS_API);
  const users = await getData.json();
  console.log(users)
  return {
    path: [
      { params: {id: users.map(user => user.id) } }
    ],
    fallback: true
  };

}




const Id = () => {
  return (
    <div>
      
    </div>
  );
};

export default Id;