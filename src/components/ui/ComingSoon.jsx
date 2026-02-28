export default function ComingSoon() {
    return (
        <div className="bg-[#2B2B2B] w-59.25 lg:w-50 h-14 flex justify-center items-center gap-1.5 rounded-full pr-5 leading-5.75 tracking-[-0.4px] text-[18px] text-white">
            {/* /ICONS */}
            <div className="flex items-center gap-[4.4px]">
                <img src="/icons/applestore.svg" width={22} height={22} />
                <img src="/icons/playstore.svg" width={22} height={22} />
            </div>
            Coming soon
        </div>
    )
}