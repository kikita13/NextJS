import React, { useState } from 'react';
import styles from '@styles/RestAPI/UsersAPI.module.css'
import Head from 'next/head';
import { UsersAPI } from '@components/RestApi/UsersAPI';
import { USERS_API } from '@consts/out-links';


const index = ( { users } ) => {
  const [usersData, setUsersData] = useState([])
  console.log(usersData);
  return (
  <div className={styles.container}>
    <Head>
      <title>Rest API</title>
    </Head>
    <UsersAPI styles={styles} users={users} usersData={usersData} setUsersData={setUsersData}/> 
</div>
);
};

export const getStaticProps = async (context) => {
  const getData = await fetch(USERS_API);
  const data = await getData.json();
  return {
    props: {users: data}
  }
}

export default index;