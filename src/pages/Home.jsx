import ScrollSnapper from "../components/ScrollSnapper"
import Hero from "../components/HomeComponents/Hero"
import TextSection from "../components/HomeComponents/TextSection"
import PhysicalSend from "../components/HomeComponents/PhysicalSend"
import useDocumentTitle from "../components/useDocumentTitle.js"

export default function Home() {

    useDocumentTitle("Zenfipay - Home")
    
    return (
        <ScrollSnapper>
            <Hero />
            <TextSection />
            <PhysicalSend />
        </ScrollSnapper>
    )
}