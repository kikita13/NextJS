import React from 'react';
export const getStaticProps = async (context) => {
  const getData = await fetch(USERS_API);
  const data = await getData.json();
  return {
    props: {users: data}
  }

}


export const getStaticPath = async ( { users } ) => {
  return {
    path: [
      { params: {id: users.map(user => user.id)} }
    ],
    fallback: true
  };

}




const Id = ( { users } ) => {
  return (
    <div>
      {users.map(user => (<div key={user.id}>{user.name}</div>))}
    </div>
  );
};

export default Id;