import {Link} from "react-router-dom"
import VL from "../ui/VerticalLine"

const year = new Date().getFullYear();

export default function Footer() {


    return (
        <footer className="bg-[#101010] w-full h-content py-8 px-4 lg:px-16 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-9">
            
            <p className="hidden lg:block text-[#7D7D7D] text-[14px] leading-4.5 tracking-[-0.14px]">
                Copyright &copy; {year} Zenstack Technology Ltd.
            </p>

            {/* SOCIALS */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8">
                <p className="text-white text-[14px] leading-4.5 tracking-[-0.14px]">SOCIALS</p>
                <ul className="text-[#636363] flex items-center gap-4 text-[14px] leading-4.5 tracking-[-0.14px]">
                    <li className="hover:text-white transition-colors ease-in duration-[0.4s]">
                        <a href="https://www.instagram.com/Zenfipay/" target="_blank">Instagram</a>
                    </li>
                    <VL />
                    <li className="hover:text-white transition-colors ease-in duration-[0.4s]">
                        <a href="https://twitter.com/Zenfipay" target="_blank">X</a>
                    </li>
                    <VL />
                    <li className="hover:text-white transition-colors ease-in duration-[0.4s]">
                        <a href="https://www.linkedin.com/company/zenfipay/" target="_blank">LinkedIn</a>
                    </li>
                    <VL />
                    <li className="hover:text-white transition-colors ease-in duration-[0.4s]">
                        <a href="https://web.facebook.com/zenfipay" target="_blank">Facebook</a>
                    </li>
                </ul>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-8">
                <p className="text-white text-[14px] leading-4.5 tracking-[-0.14px]">LEGAL</p>
                <div className="flex justify-between items-baseline">
                    <ul className="text-[#636363] flex items-center gap-4 text-[14px] leading-4.5 tracking-[-0.14px]">
                        <li className="hover:text-white transition-colors ease-in duration-[0.4s]">
                            <Link to="/terms" target="_blank">
                                Terms
                            </Link>
                        </li>
                        <VL />
                        <li className="hover:text-white transition-colors ease-in duration-[0.4s]">
                            <Link to="/privacy" target="_blank">
                                Privacy
                            </Link>
                        </li>
                    </ul>
                    <span className="lg:hidden text-[#7D7D7D] text-[14px] leading-4.5 tracking-[-0.14px]">&copy; {year}</span>
                </div>
            </div>
        </footer>
    )
}