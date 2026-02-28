import { useState } from "react"
import { AnimatePresence, motion as Motion } from "framer-motion"
import SplitText from "../components/ui/SplitText"

const personalQuestions = [
    {
        q: "What is Zenfipay",
        a:"Zenfipay is a payment platform that lets individuals use stablecoins for everyday, real-world payments. It allows you to pay in stores, send money, and spend stablecoins just like regular money",
    },
    {
        q: "Do I need a Zenfipay account to pay",
        a:"No. You can pay directly from your existing crypto wallet without signing up or creating a ZenfiPay account.",
    },
    {
        q: "Can I pay with stablecoins in physical stores",
        a:"Yes. At checkout, you simply scan a QR code and complete payment using supported stablecoins from your wallet.",
    },
    {
        q: "Which stablecoins are supported",
        a:"ZenfiPay supports major stablecoins like USDT and USDC on selected blockchain networks.",
    },
    {
        q: "How fast are payments",
        a:"Payments are confirmed in seconds, so you can complete checkout without waiting or delays.",
    },
    {
        q: "How do I know my payment is successful",
        a:"After payment, both you and the merchant receive a clear, human-readable confirmation that shows the payment status instantly.",
    },
    {
        q: "Can I earn rewards when I pay",
        a:"Yes. You earn Zen Points whenever you transact, which can be used toward future payments and benefits.",
    },
    {
        q: "Is Zenfipay secure for users",
        a:"Yes. Payments run through secure, verified transaction flows designed to protect your funds and payment data.",
    },
]

const businessQuestions = [
    {
        q: "What type of businesses can use Zenfipay",
        a:"ZenfiPay is built for physical businesses such as retail stores, supermarkets, restaurants, hotels, electronics stores, and service providers.",
    },
    {
        q: "Do I need to change my checkout process",
        a:"No. ZenfiPay fits into your existing checkout flow and requires little to no staff retraining.",
    },
    {
        q: "How do customers pay in my store",
        a:"Customers scan a QR code at checkout and pay using supported stablecoins from their own wallets.",
    },
    {
        q: "Can I manage multiple cashiers or branches",
        a:"Yes. You can manage staff roles, cashiers, and multiple locations from a single dashboard.",
    },
    {
        q: "How do I receive money",
        a:"Merchants receive stable, predictable settlements, with options for instant payouts or scheduled settlements.",
    },
    {
        q: "Are settlements fast",
        a:"Yes. Once a payment is confirmed, settlement happens in seconds.",
    },
    {
        q: "Can I receive payments in USD, GBP, or EUR",
        a:"Yes. ZenfiPay provides virtual foreign accounts that allow you to receive USD, GBP, and EUR.",
    },
    {
        q: "Can I convert between fiat and stablecoins",
        a:"Yes. ZenfiPay supports on-ramp and off-ramp services, as well as fiat-to-stablecoin and stablecoin-to-fiat swaps.",
    },
    {
        q: "Are exchange rates and fees transparent",
        a:"Yes. All exchange rates and fees are shown clearly before you complete any transaction.",
    },
    {
        q: "Is Zenfipay secure for businesses",
        a:"Yes. ZenfiPay uses secure infrastructure, verified payment flows, and clear proof of payment to protect merchants.",
    },
    {
        q: "Does Zenfipay follow regulations",
        a:"ZenfiPay operates within applicable regulatory frameworks in supported regions.",
    },
    {
        q: "Where is Zenfipay available",
        a:"ZenfiPay is launching in selected African markets, with plans to expand globally.",
    },
    {
        q: "How do businesses get started",
        a:"Businesses start with a demo-first onboarding process to understand how ZenfiPay works before going live.",
    },
]

function AccordionList({ questions }) {

    const [ openIndex, setOpenIndex ] = useState(null)

    const toggle = (index) => {
        setOpenIndex(prev => prev === index ? null : index)
    }

    return (
        <ul className="rounded-3xl overflow-hidden bg-white">
            {questions.map(( item,index ) => {
                const isOpen = openIndex === index;

                return (
                    <Motion.li
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                        className="w-full flex flex-col gap-5 py-7 px-6 border-b-[0.5px] border-[#EBEBEB]"
                    >
                        {/* QUESTION */}
                        <div
                            role="button"
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between cursor-pointer"
                        >
                            <p className="raveoMedium text-[18px] leading-6 tracking-normal text-[#101010]">{item.q}</p>
                            <Motion.img
                                src="/icons/plusIcon.svg"
                                alt="plus icon"
                                animate={{ rotate: isOpen ? 45 : 0 }}
                                transition={{ duration: 0.25 }}
                            />
                        </div>

                        {/* ANSWER */}
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <Motion.div
                                    key="answer"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className=" text-[16px] leading-6 tracking-normal text-[#101010]">
                                        {item.a}
                                    </p>
                                </Motion.div>
                            )}
                        </AnimatePresence>
                    </Motion.li>
                )
            })}
        </ul>
    )
}

export default function FAQ() {

    const [ activeTab, setActiveTab ] = useState("personal")

    return (
        <section className="pb-20 flex justify-center items-center">
            
            <div className="relative top-33.5 w-full lg:w-151.25 flex flex-col gap-14 px-4 lg:px-0">

                <div className="flex flex-col gap-2.5">
                    <SplitText 
                        text="Frequently asked questions" 
                        className="text-[36px] leading-[100%] tracking-[-0.5px] text-left text-[#101010]"
                    />
                    <Motion.p 
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{ duration:1.5, delay:0.5 }}
                        className="lg:w-149 text-[14px] md:text-[16px] leading-6 tracking-normal"
                    >
                        Find answers to common questions about how Zenfipay works for both customers and merchants.
                    </Motion.p>
                </div>

                {/* QUESTIONS TABS */}
                <div className="flex flex-col gap-10">

                    {/* TABS SELECTOR CONTAINER */}
                    <div className="relative z-1 w-full lg:max-h-162.75 flex flex-col overflow-hidden">
                        <div className="relative bg-[#FAFAFA] w-full md:w-fit h-12 lg:h-10 mx-auto lg:mx-0 rounded-full border-0.5 border-white p-1">

                            {/* SLIDIND INDICATOR */}
                            <div
                                className={`absolute top-1 left-1 z-10 bg-[#101010] w-[calc(50%-4px)] h-8 border-[0.5px] border-[#101010] rounded-full transition-transform duration-300 ease-out cursor-pointer
                                ${activeTab === "business" ? "translate-x-full" : "translate-x-0"}
                                `}
                            />

                            {/* BUTTONS */}
                            <div className="relative z-10 flex h-full">
                                <button
                                    className={`w-1/2 h-8 relative select-none inline-flex items-center justify-center p-1 rounded-full text-[14px] radioButton cursor-pointer ${activeTab === "personal" ? " text-white" : "bg-transparent text-[#101010] " }`}
                                    onClick={() => setActiveTab("personal")}
                                >
                                    Personal
                                </button>
                                <button
                                    className={`w-1/2 h-8 relative select-none inline-flex items-center justify-center p-1 rounded-full text-[14px] radioButton cursor-pointer ${activeTab === "business" ? " text-white" : "bg-transparent text-[#101010] " }`}
                                    onClick={() => setActiveTab("business")}
                                >
                                    Business
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* TAB CONTENT/QUESTIONS */}
                    <AnimatePresence mode="wait">
                        <>
                            {activeTab === "personal" && (
                                <Motion.div
                                    key="personal"
                                    initial={{ x:-8, opacity:0 }}
                                    animate={{ x:0, opacity:1 }}
                                    exit={{ x:-8, opacity:0 }}
                                    transition={{ duration:0.18, ease:"easeOut" }}
                                    className="flex flex-col gap-11 border border-[#EBEBEB] rounded-xl"
                                >
                                    <AccordionList questions={personalQuestions} />
                                </Motion.div>
                            )}

                            {activeTab === "business" && (
                                <Motion.div
                                    key="business"
                                    initial={{ x:8, opacity:0 }}
                                    animate={{ x:0, opacity:1 }}
                                    exit={{ x:8, opacity:0 }}
                                    transition={{ duration:0.18, ease:"easeOut" }}
                                    className="flex flex-col gap-11 border border-[#EBEBEB] rounded-xl"
                                >
                                    <AccordionList questions={businessQuestions} />
                                </Motion.div>
                            )}
                        </>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    )
}