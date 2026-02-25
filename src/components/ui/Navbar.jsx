import { useRef, useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [ menuOpen, setMenuOpen ] = useState(false);
    const lastScrollY = useRef(0)

    useEffect(() => {
        
    })

    return (
        <nav className="bg-red-700 fixed top-0 z-10 w-full h-18 flex justify-between items-center py-8 px-16">
            hiya
        </nav>
    )
}