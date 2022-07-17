import { DropDown } from "@components/Buttons/DropDown/DropDown";
import Head from "next/head";


const index = () => {
  return (
    <div>
      <Head>
        <title>Drop menu</title>
      </Head>
      <DropDown />
    </div>
  );
};

export default index;