import { NotFoundPage404 } from "./NotFoundPage404";
import { NotFoundPageBtn } from "./NotFoundPageBtn";
import { NotFoundPageText } from "./NotFoundPageText";



export const NotFoundPage = ( { styles } ) => {
  return (
    <div className={styles.content}>
      <NotFoundPage404/>
      <NotFoundPageText/>
      <NotFoundPageBtn/>
    </div>
  );
};
