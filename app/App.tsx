import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = (props: any) => {
    return (
        <>
            <section>
                <Header />
                {props.children}
                <Footer />
            </section>
        </>
    );
};
