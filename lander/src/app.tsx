import { Routes, Route } from 'react-router-dom'
import HomePage from "../components/pages/HomePage"
import PricingPage from "../components/pages/PricingPage"
import AboutPage from "../components/pages/AboutPage"
import ContactPage from "../components/pages/ContactPage"
import CookiePolicyPage from "../components/pages/CookiePolicyPage"
import TermsOfServicePage from "../components/pages/TermsOfServicePage"
import PrivacyPolicyPage from "../components/pages/PrivacyPolicyPage"
import AuthPage from "../components/pages/AuthPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cookiepolicy" element={<CookiePolicyPage />} />
      <Route path="/termsofservice" element={<TermsOfServicePage />} />
      <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}