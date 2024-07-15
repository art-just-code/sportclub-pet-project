import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import StoreProvider from "@/app/StoreProvider";

export const App = (props: any) => {
    return (
        <StoreProvider>
            <Header />
            {props.children}
            <Footer />
        </StoreProvider>
    );
};
