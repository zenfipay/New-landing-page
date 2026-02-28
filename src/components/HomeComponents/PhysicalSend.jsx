import RequestAccessBtn from "../ui/RequestAccessBtn"
import ComingSoon from "../ui/ComingSoon"
import SplitText from "../ui/SplitText"

export default function PhysicalSend() {
    return (
        <section className="bg-[#102801] h-screen flex flex-col justify-center items-center align-center gap-10">

            <SplitText className="w-69.75 lg:w-114.5 text-[48px] lg:text-[80px] leading-12 lg:leading-18.75 tracking-[-3px] text-white text-center" text="Spending is now physical." />
            
            {/* BUTTONS */}
            <div className="flex flex-col justify-center items-center lg:flex-row gap-6">
                <RequestAccessBtn />
                <ComingSoon />
            </div>
        </section>
    )
}