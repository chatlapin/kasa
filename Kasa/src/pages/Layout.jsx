import Footer from "composants/Footer.jsx";
import Header from "composants/Header.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
