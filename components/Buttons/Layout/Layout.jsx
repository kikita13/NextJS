import { AppBar } from "./AppBarItems/AppBar";
import { Footer } from "./FooterItems/Footer";


export const Layout = ({children}) => {

  

  return (
    <>
      <AppBar/>
        {children}
      <Footer/>
    </>
  );
};
