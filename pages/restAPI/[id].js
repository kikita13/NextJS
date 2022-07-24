import { User } from '@components/RestApi/User/User';
import { USER_API } from '@consts/out-links';
import React from 'react';
import styles from '@styles/RestAPI/User/User.module.css'

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const getData = await fetch(USER_API(id));
  const user = await getData.json();
  if (!user) {
    return {
      notFound: true,
    }
  }
  return {
    props: {user}
  }
}
const Id = ( { user } ) => {
  return (
    <div className={styles.container}>
      <User styles={styles} user={user}/>
    </div>
  );
};

export default Id;

