import { useState } from "react"
import { AnimatePresence, motion as Motion } from "framer-motion"
import useDocumentTitle from "../components/useDocumentTitle.js"
import SplitText from "../components/ui/SplitText.jsx"

const personalTerms = [
    {
        title: "Introduction",
        paragraph1: "These Terms of Service (“Terms”) govern your access to and use of ZenfiPay’s personal financial services. By creating an account or using ZenfiPay as a personal user, you agree to be bound by these Terms.",
        paragraph2: "If you do not agree to these Terms, you must not use ZenfiPay services.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "About Zenfipay",
        paragraph1: "Zenstack Technology Ltd (“ZenfiPay”, “we”, “us”, or “our”) provides digital financial services to personal users through its platform. ZenfiPay is a technology company and does not operate as a bank.",
        paragraph2: "Our personal services may include access to virtual foreign currency accounts, stablecoin wallets and transfers, virtual payment cards, bank transfer top-ups and withdrawals, QR-code payments, and related financial tools made available from time to time.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Eligibility",
        paragraph1: "To use ZenfiPay personal services, you must be at least eighteen (18) years old and have the legal capacity to enter into a binding agreement. You must provide accurate, complete, and up-to-date information during registration and throughout your use of the platform.",
        paragraph2: "ZenfiPay reserves the right to refuse or restrict access to services at its discretion.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Account registration & verification",
        paragraph1: "You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted through your account.",
        paragraph2: "ZenfiPay may require identity verification to comply with legal and regulatory obligations, prevent fraud, and ensure platform security. Failure to complete required verification may result in limitations, suspension, or termination of your account.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Personal accounts, wallets, and digital assets",
        paragraph1: "ZenfiPay provides access to virtual foreign currency accounts and digital wallets through licensed and third-party service providers. These accounts are not traditional bank accounts and may be subject to provider-specific terms, limits, and restrictions.",
        paragraph2: "ZenfiPay supports certain stablecoins as digital assets. Stablecoins are not legal tender in Nigeria and their value depends on the underlying issuing protocol and market conditions. ZenfiPay does not guarantee the value, stability, or availability of any digital asset.",
        paragraph3: "Depending on the service, wallets may be custodial or facilitated through third-party custodians.",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Virtual cards",
        paragraph1: "ZenfiPay may issue virtual payment cards for online and international transactions through licensed card issuers. Use of virtual cards is subject to card network rules, issuer policies, compliance checks, and transaction limits.",
        paragraph2: "ZenfiPay may suspend or terminate card access if suspicious or prohibited activity is detected.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Top-ups, transfers, and payments",
        paragraph1: "You may fund your ZenfiPay account through supported bank transfers or other approved payment methods. Transactions may be subject to processing times, limits, fees, and compliance checks.",
        paragraph2: "ZenfiPay facilitates QR-code payments and digital transfers using supported settlement and infrastructure partners. Transaction availability may vary based on network conditions, provider constraints, or regulatory requirements.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Fees & charges",
        paragraph1: "ZenfiPay may charge fees for certain services, including currency conversion, stablecoin transactions, card usage, or withdrawals. Applicable fees will be disclosed before a transaction is completed.",
        paragraph2: "ZenfiPay reserves the right to update its pricing from time to time.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Prohibited use",
        paragraph1: "You agree not to use ZenfiPay for unlawful, fraudulent, or prohibited activities, including money laundering, terrorism financing, sanctions violations, or any activity that breaches applicable laws or regulations.",
        paragraph2: "ZenfiPay may investigate and take appropriate action, including suspension or termination of accounts, where prohibited activity is suspected.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Suspension & termination",
        paragraph1: "ZenfiPay may suspend or terminate your access to services if you breach these Terms, fail to meet verification requirements, or where required by law or regulation.",
        paragraph2: "In certain cases, access to funds may be restricted pending compliance, legal review, or investigation.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Risk disclosure",
        paragraph1: "You acknowledge that digital financial services and digital assets involve risk. Stablecoins may lose their peg, transactions may be irreversible, and regulatory frameworks may change.",
        paragraph2: "You use ZenfiPay services at your own risk.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Limitation of liability",
        paragraph1: "To the maximum extent permitted by law, ZenfiPay shall not be liable for losses resulting from market fluctuations, third-party service failures, delays, interruptions, unauthorized access beyond our control, or regulatory changes.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Amendments",
        paragraph1: "ZenfiPay may update these Terms from time to time. Updated versions will be published on our website, and continued use of the platform constitutes acceptance of the revised Terms.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Governing law",
        paragraph1: "These Terms are governed by the laws of the Federal Republic of Nigeria, unless otherwise required by applicable law.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
]

const businessTerms = [
    {
        title: "Introduction",
        paragraph1: "These Terms of Service (“Terms”) govern access to and use of the products, services, software, and infrastructure provided by Zenstack Technology Ltd. (“ZenfiPay,” “we,” “our,” or “us”), including stablecoin payment processing, merchant settlement services, account features, and related tools (collectively, the “Services”).",
        paragraph2: "By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Services.",
        paragraph3: "These Terms apply to merchants, businesses, individual users of the ZenfiPay mobile application, and any other parties interacting with ZenfiPay’s platform.",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Eligibility & account use",
        paragraph1: "You may use the Services only if you have the legal capacity to enter into binding agreements under applicable law. Merchants must be duly registered businesses and must provide accurate and complete information during onboarding.",
        paragraph2:"ZenfiPay reserves the right to refuse, suspend, or terminate access to the Services if eligibility requirements are not met or if information provided is inaccurate, misleading, or incomplete.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: ""

    },
    {
        title: "Description of services",
        paragraph1: "ZenfiPay provides infrastructure that enables the acceptance, processing, and settlement of stablecoin payments for real-world commerce. The Services may include merchant payment tools, QR-based checkout, settlement options, account features, currency conversion, and related operational dashboards.",
        paragraph2:"ZenfiPay does not guarantee uninterrupted availability of the Services and may modify, suspend, or discontinue any part of the Services at any time, subject to applicable law.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: ""

    },
    {
        title: "Payment processing & transactions",
        paragraph1: "ZenfiPay facilitates payment processing between customers and merchants using supported stablecoins and networks. Transaction confirmation times depend on the underlying blockchain network and external factors beyond ZenfiPay’s control. ZenfiPay does not control third-party wallets, blockchain networks, or protocols and is not responsible for delays, failures, or errors originating from such systems.",
        paragraph2:"Once a transaction is confirmed on the applicable network, it is considered final and irreversible.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: ""

    },
    {
        title: "Identitify verification & compliance",
        paragraph1: "Certain Services require identity verification in order to comply with Know Your Customer (KYC), Anti-Money Laundering (AML), and related regulatory obligations. When required, users agree to provide accurate and up-to-date information and consent to verification processes. ZenfiPay may suspend or restrict access to the Services if verification requirements are not satisfied or if required by law or regulatory authorities.",
        paragraph2:"",
        paragraph3: "",
        paragraph4: "",
        paragraph5: ""

    },
    {
        title: "Fees & pricing",
        paragraph1: "ZenfiPay may charge fees for certain Services, including transaction processing, currency conversion, settlement options, or subscription-based offerings. Applicable fees will be disclosed prior to use or agreed upon separately with merchants.",
        paragraph2: "Fees are non-refundable except where required by law or expressly stated otherwise.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "User responsibilities",
        paragraph1: "Users agree to use the Services in compliance with all applicable laws, regulations, and these Terms. Users must not use the Services for unlawful, fraudulent, or prohibited activities, including but not limited to money laundering, sanctions violations, or unauthorized transactions. Users are responsible for maintaining the security of their access credentials and for all activity conducted through their accounts.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Non-custodial nature of services",
        paragraph1: "ZenfiPay may disclose information to service providers, infrastructure partners, compliance and identity verification providers, financial institutions, and settlement partners solely to the extent necessary to provide the Services. Information may also be disclosed to regulatory authorities, law enforcement, or courts where required by law or in response to lawful requests. All disclosures are subject to appropriate safeguards.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Intellectual property",
        paragraph1: "All content, software, trademarks, logos, and proprietary materials associated with the Services are owned by or licensed to ZenfiPay. These Terms do not grant users any ownership rights in ZenfiPay’s intellectual property. Users may not copy, modify, distribute, or reverse engineer any part of the Services without prior written consent",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Suspension & termination",
        paragraph1: "ZenfiPay may suspend or terminate access to the Services at any time if it reasonably believes that a user has violated these Terms, poses a security or compliance risk, or if required by law or regulatory authorities. Upon termination, outstanding obligations, fees, and legal rights shall survive as applicable.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Limitation of liability",
        paragraph1: "To the maximum extent permitted by law, ZenfiPay shall not be liable for indirect, incidental, consequential, or special damages arising out of or related to the use of the Services, including loss of profits, data, or business opportunities. ZenfiPay’s total liability, where permitted by law, shall be limited to the fees paid to ZenfiPay for the applicable Services during the period giving rise to the claim.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Idemnification",
        paragraph1: "Users agree to indemnify and hold harmless ZenfiPay, its directors, officers, employees, and partners from any claims, damages, losses, or expenses arising from misuse of the Services, violation of these Terms, or violation of applicable law.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Governing law & dispute resolution",
        paragraph1: "These Terms are governed by the laws of the applicable jurisdiction in which ZenfiPay operates, without regard to conflict of law principles. Disputes shall be resolved through competent courts or alternative dispute resolution mechanisms as required by applicable law.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Changes to these terms",
        paragraph1: "ZenfiPay may update these Terms from time to time to reflect changes in the Services, legal requirements, or operational practices. Updated Terms will be made available on our website.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
]

export default function TermsOfService() {

    const [ activeTab, setActiveTab ] = useState("personal")

    useDocumentTitle("Terms / Zenfipay")
    return (
        <section className="flex justify-center items-center">
            
            <div className="relative top-33.5 w-full lg:w-151.25 flex flex-col gap-14 px-4 lg:px-0">
                <div className="flex flex-col gap-2.5">
                    <SplitText 
                        text="Terms of service"
                        className="text-[36px] leading-11.75 tracking-[-0.5px] text-left text-[#101010]"
                    />

                    <Motion.p 
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{ duration:1.5, delay:0.5 }}
                        className="text-[14px] md:text-[16px] leading-6 tracking-normal"
                    >
                        Last updated:15th January, 2026
                    </Motion.p>
                </div>


                {/* TABS */}
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

                    {/* TAB CONTENT */}
                    <AnimatePresence mode="wait">
                        <div>
                            {activeTab === "personal" && (
                                <Motion.div
                                    key="personal"
                                    initial={{ x:-8, opacity:0 }}
                                    animate={{ x:0, opacity:1 }}
                                    exit={{ x:-8, opacity:0 }}
                                    transition={{ duration:0.18, ease:"easeOut" }}
                                    className="flex flex-col gap-11"
                                >
                                    {personalTerms.map((term) => (
                                        <div key={term.introduction} className="flex flex-col gap-6">
                                            <h5 className="text-[22px] lg:text-[20px] leading-6 tracking-normal text-[#101010] raveoMedium">{term.title}</h5>
                                            <div className=" flex flex-col gap-3 text-[16px] pr-4 ">
                                                <p className="">{term.paragraph1}</p>
                                                <p className="">{term.paragraph2}</p>
                                                <p className="">{term.paragraph3}</p>
                                                <p className="">{term.paragraph4}</p>
                                                <p className="">{term.paragraph5}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Motion.div>
                            )}

                            {activeTab === "business" && (
                                <Motion.div
                                    key="business"
                                    initial={{ x:8, opacity:0 }}
                                    animate={{ x:0, opacity:1 }}
                                    exit={{ x:8, opacity:0 }}
                                    transition={{ duration:0.18, ease:"easeOut" }}
                                    className="flex flex-col gap-11"
                                >
                                    {businessTerms.map((term) => (
                                        <div key={term.introduction} className="flex flex-col gap-6">
                                            <h5 className="text-[22px] lg:text-[20px] leading-6 tracking-normal text-[#101010] raveoMedium">{term.title}</h5>
                                            <div className=" flex flex-col gap-3 text-[16px] pr-4 ">
                                                <p className="">{term.paragraph1}</p>
                                                <p className="">{term.paragraph2}</p>
                                                <p className="">{term.paragraph3}</p>
                                                <p className="">{term.paragraph4}</p>
                                                <p className="">{term.paragraph5}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Motion.div>
                            )}
                        </div>
                    </AnimatePresence>
                </div>
           </div>
        </section>
    )
}