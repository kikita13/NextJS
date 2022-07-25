import React, { useState } from 'react';
import styles from '@styles/RestAPI/UsersAPI.module.css'
import Head from 'next/head';
import { UsersAPI } from '@components/RestApi/UsersAPI';
import { USERS_API } from '@consts/out-links';


const Index = ( { users } ) => {
  const [usersData, setUsersData] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const filteredUsers = filterUsers == ''  ?  usersData : usersData.filter(user => {return user.name.toLowerCase().includes(filterUsers?.toLowerCase())})
  return (
  <div className={styles.container}>
    <Head>
      <title>Rest API</title>
    </Head>
    <UsersAPI 
      styles={styles} 
      users={users} 
      usersData={usersData} 
      setUsersData={setUsersData}
      filterUsers={filterUsers}
      setFilterUsers={setFilterUsers}  
      filteredUsers={filteredUsers}
    /> 
  </div>
)};

export const getServerSideProps = async (context) => {
  const getData = await fetch(USERS_API);
  const users = await getData.json();
  return {
    props: {users}
  }
}

export default Index;