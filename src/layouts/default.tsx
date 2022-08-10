import { ScriptProps } from "next/script";
import Footer from "./components/footer";
import Header from "./components/header";

const DefaulLayout = ({ children }: ScriptProps ) => {
    return (
        <div>
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
    );
}
export default DefaulLayout;