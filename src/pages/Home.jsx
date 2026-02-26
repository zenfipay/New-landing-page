import ScrollSnapper from "../components/ScrollSnapper"
import Hero from "../components/HomeComponents/Hero"
import TextSection from "../components/HomeComponents/TextSection"
import PhysicalSend from "../components/HomeComponents/PhysicalSend"
import Navbar from "../components/ui/NavbarHome"

export default function Home() {
    return (
        <ScrollSnapper>
            <Hero />
            <TextSection />
            <PhysicalSend />
        </ScrollSnapper>
    )
}