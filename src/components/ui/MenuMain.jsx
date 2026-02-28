import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

// const menuVariants = {
//   closed: {
//     scaleX: 0,
//     transition: {
//       duration: 0.35,
//       ease: "easeInOut"
//     }
//   },
//   open: {
//     scaleX: 1,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//       damping: 14,
//       mass: 0.8
//     }
//   }
// }


export default function MenuMain({ open, onClose }) {

    return (
        <AnimatePresence>
            {open && (
                <Motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed inset-0 z-20 bg-white px-2"
                >
                  <div className="lg:hidden bg-white fixed top-0 z-30 w-full h-18 flex justify-between items-center py-8 px-4">
                      <figure>
                        <img src="/icons/zenfipayBlue.svg" alt="Zenfipay logo" className="w-full" loading="lazy" />
                      </figure>

                      <button
                        className=""
                        onClick={onClose}
                      >
                        <img src='/icons/menu-close.svg' alt="hamburger menu icon" className="w-full" />
                      </button>
                  </div>

                  <div className="h-screen flex flex-col justify-between items-start pt-37.5 px-4">
                    
                    {/* LINK */}
                    <ul className="flex flex-col gap-8 text-[36px] leading-11 tracking-normal text-[#101010]">
                      <li>
                        <Link to="/faq">
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <a href="mailto:daveadedigba@gmail.com" rel="noreferrer">
                          Contact us
                        </a>
                      </li>
                    </ul>

                    {/* BUTTONS */}
                    <div className="w-full flex items-center gap-4 py-6">
                      <button
                          type="button"
                          className="bg-[#F6F6F6] w-1/2 h-14 px-4 text-[18px] leading-5.75 tracking-[-0.4px] text-[#101010] radioButton pl-5"
                          onClick={() => {}}
                      >
                          Sign in
                      </button>
                      <button
                          type="button"
                          className="bg-black w-1/2 h-14 px-4 text-[18px] leading-5.75 tracking-[-0.4px] text-white radioButton pl-5"
                          onClick={() => {}}
                      >
                          Get a demo
                      </button>
                    </div>
                  </div>
                    
                </Motion.div>
            )}
        </AnimatePresence>
    )
}