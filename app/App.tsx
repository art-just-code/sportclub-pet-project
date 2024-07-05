import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = (props: any) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};
