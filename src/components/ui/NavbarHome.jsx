import { useState } from "react"
import { Link } from 'react-router-dom'
import { motion as Motion } from "framer-motion";
import Menu from "./Menu";

export default function NavbarHome() {

    const [ menuOpen, setMenuOpen ] = useState(false);

    return (

        <Motion.nav 
            initial={{ y:-40 }}
            animate={{ y:0 }}
            transition={{ duration:0.5, ease:"easeIn" }}
            className="bg-[#101010] fixed top-0 z-10 w-full h-18 flex justify-between items-center py-8 px-4 lg:px-16"
        >
            <figure>
                <img src="/icons/zenfipay.svg" alt="Zenfipay logo" className="w-full" loading="lazy" />
            </figure>

            {/* LINKS */}
            <ul className="hidden lg:flex gap-8 text-white">
                <li className="text-[14px] leading-4.5 tracking-[-0.14px]">
                    <Link to="/faq">
                        FAQs
                    </Link>
                </li>
                <li className="text-[14px] leading-4.5 tracking-[-0.14px]">
                    <a href="mailto:daveadedigba@gmail.com" target="_blank" rel="noreferrer">
                        Contact us
                    </a>
                </li>
            </ul>

            {/* BUTTONS */}
            <div className="">
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        type="button"
                        className="bg-[#2B2B2B] h-10 px-4 text-[14px] leading-4.5 tracking-[-0.2px] text-white radioButton"
                        onClick={() => {}}
                    >
                        Sign in
                    </button>

                    <button
                        type="button"
                        className="bg-white h-10 px-4 text-[14px] leading-4.5 tracking-[-0.2px] text-[#101010] radioButton"
                        onClick={() => {}}
                    >
                        Get a demo
                    </button>
                </div>
                
                <div className="lg:hidden">
                    <button
                        className=""
                        onClick={() => setMenuOpen(true)}
                    >
                        <img src='/icons/menu-open.svg' alt="hamburger menu icon" className="w-full" />
                    </button>

                    <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
                </div>
            </div>

        </Motion.nav>
    )
}