import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'


import Home from "./pages/Home"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from './pages/TermsOfService'
import FAQ from './pages/FrequentlyAskedQuestions'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
