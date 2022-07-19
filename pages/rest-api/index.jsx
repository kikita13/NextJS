import React, { useCallback, useEffect } from 'react';
import { USERS_API } from '@consts/out-links'
import { getStaticProps } from '@consts/out-links';



const index = ( ) => {

  return (
    <div onClick={() => getStaticProps()}>

    </div>
  );
};

export default index;