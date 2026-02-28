import { useLocation } from "react-router-dom";
import NavbarHome from "./components/ui/NavbarHome";
import NavbarMain from "./components/ui/NavbarMain";
import Footer from "./components/ui/Footer";
import './index.css'


const mainNavRoutes = ['/privacy', '/terms', '/faq']

export default function Layout({ children }) {

    const { pathname } = useLocation()
    const useMainNav = mainNavRoutes.includes(pathname)

    return (
        <div className="max-w-screen h-screen flex flex-col">
            {useMainNav ? <NavbarMain /> : <NavbarHome />}
            <main className="flex flex-1 flex-col gap-25">
                {children}
                {useMainNav ? <Footer /> : <></>}
            </main>
        </div>
    )
}