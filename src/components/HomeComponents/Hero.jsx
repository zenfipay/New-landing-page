import ComingSoon from "../ui/ComingSoon"
import RequestAccessBtn from "../ui/RequestAccessBtn"
import SplitText from "../ui/SplitText"
import { motion as Motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="bg-[#101010] relative h-screen flex justify-center items-start ">

            <div className="relative top-[148.5px] lg:top-25 w-90.25 lg:w-156.25  flex flex-col justify-center items-center gap-11">

                {/* TEXT */}
                <div className="w-90.25 lg:w-151.25 flex flex-col justify-center items-center gap-2.5">
                    {/* <h1 className="text-white text-[48px] lg:text-[80px] leading-12 lg:leading-18.75 tracking-[-1.5px] lg:tracking-[-3px] text-center">
                        Stablecoin payment for all
                    </h1> */}
                    <SplitText className="text-white text-[48px] lg:text-[80px] leading-12 lg:leading-18.75 tracking-[-1.5px] lg:tracking-[-3px] text-center" text="Stablecoin payment for all" />
                    <Motion.p 
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{ duration:1.5, delay:0.5 }}
                        className=" w-full lg:w-98 text-[14px] lg:text-[20px] leading-6 tracking-normal text-white text-center"
                    >
                        Built for businesses, accessible to individuals.
                    </Motion.p>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col justify-center items-center lg:flex-row gap-6">
                    <RequestAccessBtn />
                    <ComingSoon />
                </div>
            </div>

            <figure className="absolute bottom-0 left-[-179.62px] lg:left-auto w-[587.33px] min-h-content lg:w-[591.85px]">
                <img src="/images/coinmat.png" width='100%' height="100%" />
            </figure>

        </section>
    )
}