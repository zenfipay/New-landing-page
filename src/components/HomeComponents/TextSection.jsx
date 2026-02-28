import { motion as Motion } from "framer-motion"
import SplitText from "../ui/SplitText"

export default function TextSection() {
    return (
        <section className="h-screen relative flex justify-center items-center align-center overflow-y-hidden">
        
            <SplitText text="Stablecoins are widely available. Using them without conversion isn't." className="w-77 lg:w-186 text-[36px] lg:text-[48px] text-center leading-12.5 lg:leading-14.5 tracking-[-1px]" />

            {/* BOTTOM TEXTS */}
            <div className="absolute -bottom-7 lg:-bottom-12 w-screen lg:w-fit overflow-hidden flex justify-center gap-[19.2px] font-radio marquee-container">
               <div className="marquee-track flex w-max gap-[19.2px] font-radio">
                    <span className="marquee-item text-[#F6F6F6] hover:text-[#0066FF]">USDT</span>
                    <span className=" marquee-item text-[#F6F6F6] hover:text-[#8859EB] ">cNGN</span>
                    <span className="marquee-item text-[#F6F6F6] hover:text-[#009393] ">USDC</span>

                    <div className="lg:hidden gap-[19.2px] ">
                        <span className="marquee-item text-[#F6F6F6] hover:text-[#0066FF]">USDT</span>
                        <span className=" marquee-item text-[#F6F6F6] hover:text-[#8859EB] ">cNGN</span>
                        <span className="marquee-item text-[#F6F6F6] hover:text-[#009393] ">USDC</span>
                    </div>
               </div>
            </div>
        </section>
    )
}