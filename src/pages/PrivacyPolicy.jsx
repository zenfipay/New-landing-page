import { useState } from "react"
import { AnimatePresence, motion as Motion } from "framer-motion"
import useDocumentTitle from "../components/useDocumentTitle.js"
import SplitText from "../components/ui/SplitText.jsx"

const personalPolicies = [
    {
        title: "Introduction",
        paragraph1: "ZenfiPay Technologies Ltd (“ZenfiPay”, “we”, “us”, or “our”) respects the privacy of individuals who use our personal financial services. This Privacy Policy explains how we collect, use, store, and disclose personal information when you access or use ZenfiPay as a personal user.",
        paragraph2: "By using our platform, you agree to the collection and use of information in accordance with this Privacy Policy.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Information we collect",
        paragraph1: "The information ZenfiPay collects depends on how you use our services and the features you access.",
        paragraph2: "When you create and use a personal ZenfiPay account, we may collect personal information such as your name, email address, phone number, date of birth, and residential address. To comply with regulatory requirements, we may also collect identity verification information, including government-issued identification, selfies, proof of address, and other verification data.",
        paragraph3: "We collect financial and transactional information related to your use of ZenfiPay services, including wallet balances, transaction history, virtual account details, card usage, top-ups, withdrawals, and QR-code payment activity.",
        paragraph4: "We may also collect technical and usage information such as device identifiers, IP address, browser type, operating system, and interaction data to help us improve platform performance and security.",
        paragraph5: "",

    },
    {
        title: "Use of information",
        paragraph1: "ZenfiPay uses personal information to provide, operate, and improve its services. This includes creating and managing user accounts, processing transactions, enabling virtual accounts and cards, facilitating stablecoin and fiat transfers, and supporting QR-code payments.",
        paragraph2: "We use your information to verify identity, prevent fraud, comply with legal and regulatory obligations, and ensure the security of our platform. Information may also be used to communicate with you regarding service updates, support requests, and important account-related notices.",
        paragraph3: "ZenfiPay does not sell personal data to third parties.",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Legal Basis for processing",
        paragraph1: "We process personal data based on one or more of the following legal grounds: performance of a contract, compliance with legal and regulatory obligations, legitimate interests such as fraud prevention and platform security, and user consent where required.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Data sharing & disclosure",
        paragraph1: "ZenfiPay may share personal information with trusted third-party service providers who assist in delivering our services. These include payment processors, settlement partners, card issuers, identity verification providers, infrastructure providers, and compliance partners.",
        paragraph2: "We may also disclose information where required by law, regulation, court order, or to protect the rights, safety, and integrity of ZenfiPay, our users, or the public.",
        paragraph3: "All third parties are required to handle personal data securely and in accordance with applicable data protection laws.",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Data retention",
        paragraph1: "ZenfiPay retains personal information only for as long as necessary to provide services, comply with legal and regulatory requirements, resolve disputes, and enforce agreements. Retention periods may vary depending on the type of data and applicable obligations.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Security",
        paragraph1: "We implement appropriate technical and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration. These measures include encryption, access controls, monitoring, and internal security procedures.",
        paragraph2: "While we take security seriously, no system can be guaranteed to be completely secure, and users acknowledge this risk when using digital financial services.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Non-custodial & Third-party services",
        paragraph1: "Certain ZenfiPay services rely on third-party infrastructure providers for custody, settlement, card issuance, and payment processing. Where applicable, these providers operate under their own privacy and security frameworks. ZenfiPay does not control third-party systems but takes reasonable steps to partner with reputable and compliant providers.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "User rights",
        paragraph1: "Depending on applicable data protection laws, you may have rights to access, correct, update, or request deletion of your personal data. You may also have the right to object to certain processing activities or withdraw consent where applicable.",
        paragraph2: "Requests can be made by contacting ZenfiPay using the details provided below. Some requests may be subject to legal or regulatory limitations.",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Intrernational data transfers",
        paragraph1: "Personal information may be processed or stored outside your country of residence where ZenfiPay or its partners operate. Where international transfers occur, appropriate safeguards are applied to ensure compliance with applicable data protection laws.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Changes to this policy",
        paragraph1: "ZenfiPay may update these Privacy Policies from time to time to reflect changes in our services, legal requirements, or operational practices. Updated versions will be published on our website, and continued use of the platform constitutes acceptance of the revised policy.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
]

const businessPolicies = [
    {
        title: "Introduction",
        paragraph1: "Zenstack Technology Ltd. (“ZenfiPay,” “we,” “our,” or “us”) respects the privacy of individuals and businesses that interact with our payment infrastructure and related services.",
        paragraph2: "This Privacy Policy describes how ZenfiPay collects, processes, stores, uses, and protects information in connection with the provision of our Services, including stablecoin payment processing, merchant settlement, account services, and related operational tools. It also explains the rights and choices available to users regarding their information.",
        paragraph3: "By accessing or using our platform, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree, please do not use our Platform.",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Information we collect",
        paragraph1: "The information ZenfiPay collects depends on how the Services are accessed and used",
        paragraph2: "For merchants, ZenfiPay collects information necessary to onboard, operate, and support business accounts. This includes business registration and incorporation details, business addresses, contact information of authorized representatives, operational preferences, and settlement configuration details. This information is required to provide the Services, manage merchant accounts, facilitate settlements, prevent fraud, and satisfy legal and regulatory obligations.",
        paragraph3: "For customers, the information collected depends on the payment method used. When customers use the ZenfiPay mobile application, ZenfiPay may collect and verify personal information as part of Know Your Customer (KYC), Anti-Money Laundering (AML), and compliance processes. This may include identification details, contact information, and other information required by applicable laws and regulations. Such information is collected only where legally required or necessary to provide regulated services.",
        paragraph4: "When customers make payments using third-party digital wallets, ZenfiPay does not collect or store personally identifiable information about those customers. In these cases, payments are initiated directly from the customer’s external wallet, and ZenfiPay does not access, store, or control private keys, wallet credentials, or personal identity data",
        paragraph5: "In addition, ZenfiPay may collect limited transactional and technical information, such as payment references, timestamps, blockchain network identifiers, transaction status, and system or device logs. This information is used strictly for payment verification, system integrity, fraud prevention, dispute resolution, analytics, and service improvement.",

    },
    {
        title: "Use of information",
        paragraph1: "ZenfiPay uses the information it processes to operate and maintain the Services, process payments and settlements, verify identities where legally required, prevent fraud and misuse, comply with legal and regulatory obligations, improve platform performance, and provide customer and merchant support. ZenfiPay does not sell personal information and does not use information for unrelated advertising purposes",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Legal basis for processing",
        paragraph1: "Where required by applicable law, ZenfiPay processes information based on the performance of a contract, compliance with legal and regulatory obligations, legitimate business interests such as fraud prevention and platform security, or user consent where such consent is required",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Data sharing & disclosure",
        paragraph1: "ZenfiPay may disclose information to service providers, infrastructure partners, compliance and identity verification providers, financial institutions, and settlement partners solely to the extent necessary to provide the Services. Information may also be disclosed to regulatory authorities, law enforcement, or courts where required by law or in response to lawful requests. All disclosures are subject to appropriate safeguards.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Data retention",
        paragraph1: "ZenfiPay retains information only for as long as necessary to provide the Services, comply with legal and regulatory requirements, resolve disputes, and enforce agreements. Retention periods vary depending on the nature of the information and applicable laws",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Security",
        paragraph1: "ZenfiPay implements technical, administrative, and organizational measures designed to protect information against unauthorized access, loss, misuse, or alteration. These measures include secure infrastructure, access controls, internal policies, and ongoing monitoring. While no system can be guaranteed to be completely secure, ZenfiPay continuously reviews and improves its security practices.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Non-custodial design",
        paragraph1: "ZenfiPay does not hold or control customer private keys. Transactions initiated through third-party wallets remain under the user’s control at all times. ZenfiPay’s role is limited to facilitating payment processing and settlement without assuming custody of user funds",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "User rights",
        paragraph1: "Subject to applicable law, users may have rights to access, correct, or delete their personal information, to restrict or object to certain processing activities, or to withdraw consent where consent is the legal basis for processing. Requests may be submitted through ZenfiPay’s official contact channels and will be handled in accordance with applicable legal requirements.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "International data transfers",
        paragraph1: "ZenfiPay may process or store information in jurisdictions outside the user’s country of residence. Where such transfers occur, ZenfiPay applies appropriate safeguards to ensure compliance with applicable data protection laws.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
    {
        title: "Changes to this policy",
        paragraph1: "ZenfiPay may update this Privacy Policy from time to time to reflect changes in the Services, legal requirements, or operational practices. Updated versions will be made available on our website",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",

    },
]

export default function PrivacyPolicy() {

    const [ activeTab, setActiveTab ] = useState("personal")

    useDocumentTitle("Privacy policy / Zenfipay")
    return (
        <section className="flex justify-center items-center">
           

           <div className="relative top-33.5 w-full lg:w-151.25 flex flex-col gap-14 px-4 lg:px-0">
                <div className="flex flex-col gap-2.5">
                    <SplitText 
                        text="Privacy policy"
                        className="text-[36px] leading-11.75 tracking-[-0.5px] text-left text-[#101010]"
                    />
                    <Motion.p
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{ duration:1.5, delay:0.5 }}
                        className="text-[14px] md:text-[16px] leading-6 tracking-normal">
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
                                    {personalPolicies.map((term) => (
                                        <div key={term.introduction} className="flex flex-col gap-6">
                                            <h5 className="text-[22px] lg:text-[20px] leading-6 tracking-normal text-[#101010] raveoMedium">{term.title}</h5>
                                            <div className=" flex flex-col gap-3 text-[16px] pr-4 lg:pr-0 ">
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
                                    {businessPolicies.map((term) => (
                                        <div key={term.introduction} className="flex flex-col gap-6">
                                            <h5 className="text-[22px] lg:text-[20px] leading-6 tracking-normal text-[#101010] raveoMedium">{term.title}</h5>
                                            <div className=" flex flex-col gap-3 text-[16px] pr-4 lg:pr-0 ">
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