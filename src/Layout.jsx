import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import './index.css'

export default function Layout() {

    return (
        <div className="max-w-screen">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}