import { HomePage } from "@components/HomePage/HomePage";
import Head from "next/head";


const index = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <HomePage/>
    </div>
  );
};

export default index;