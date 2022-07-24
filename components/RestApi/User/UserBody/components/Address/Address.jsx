import { City } from "./City";
import { Street } from "./Street";
import { Suite } from "./Suite";
import { Zipcode } from "./Zipcode";


export const Address = ( { user, styles } ) => {
  
  return (
    <div className={styles.address}>
      <Zipcode user={user} styles={styles}/>
      <City user={user} styles={styles}/>
      <Street user={user} styles={styles}/>
      <Suite user={user} styles={styles}/>
    </div>
  );
};

