import { Routes, Route } from 'react-router-dom'
import HomePage from "../components/pages/HomePage"
import PricingPage from "../components/pages/PricingPage"
import AboutPage from "../components/pages/AboutPage"
import ContactPage from "../components/pages/ContactPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}