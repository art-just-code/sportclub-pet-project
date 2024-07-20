import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Overlay } from "./components/Overlay/Overlay";
import { Popup } from "./components/Popup/Popup";
import { RentForm } from "./components/RentForm/RentForm";
import StoreProvider from "@/app/StoreProvider";

export const App = (props: any) => {
    return (
        <StoreProvider>
            <Header />
            {props.children}
            <Footer />
            <Overlay />
            <Popup>
                <RentForm />
            </Popup>
        </StoreProvider>
    );
};
