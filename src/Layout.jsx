import { useLocation } from "react-router-dom";
import NavbarHome from "./components/ui/NavbarHome";
import NavbarMain from "./components/ui/NavbarMain";
import Footer from "./components/ui/Footer";
import './index.css'


const mainNavRoutes = ['/privacy', '/terms']

export default function Layout({ children }) {

    const { pathname } = useLocation()
    const useMainNav = mainNavRoutes.includes(pathname)

    return (
        <div className="max-w-screen">
            {useMainNav ? <NavbarMain /> : <NavbarHome />}
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}