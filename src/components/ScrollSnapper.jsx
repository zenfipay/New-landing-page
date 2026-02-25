import React,  { useEffect, useRef, useState } from "react";

// interface Props {
//     children: React.ReactNode[];
// }

export default function ScrollSnapper({ children }) {

    const containerRef = useRef(null);
    const isScrolling = useRef(false)
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e) => {
            e.preventDefault()

            if(isScrolling.current) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const sections = container.querySelectorAll('.snap-section');

            setCurrentIndex((prev) => {
                const next = Math.min(Math.max(prev + direction, 0), sections.length - 1);

                if( next !== prev ) {
                    isScrolling.current = true;
                    sections[next].scrollIntoView({ behavior: 'smooth' })

                    setTimeout(() => {
                        isScrolling.current = false;
                    }, 800)
                }

                return next;
            })
        }

        container.addEventListener('wheel', handleWheel, { passive:false });
        return () => container.removeEventListener('wheel', handleWheel)
    }, [])

    return (
        <div
            ref={containerRef}
            className="min-w-full h-screen overflow-y-scroll snap-y snap-mandatory"
        >
            {React.Children.map(children, (child, i) => (
                <div
                    key={i}
                    className=" snap-section h-screen snap-start"
                >
                    {child}
                </div>
            ))}
        </div>
    )
}