import Head from "next/head";
import { ScriptProps } from "next/script";
import BaseLayout from "./base";
import Footer from "./components/footer";
import Header from "./components/header";

const DefaulLayout = ({ children }: ScriptProps) => {
  return (
    <BaseLayout>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </BaseLayout>
  );
};
export default DefaulLayout;
