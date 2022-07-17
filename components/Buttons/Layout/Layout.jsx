import { AppBar } from "./AppBarItems/AppBar";
import { Footer } from "./Footer";


export const Layout = ({children}) => {

  

  return (
    <>
      <AppBar/>
        {children}
      <Footer/>
    </>
  );
};
