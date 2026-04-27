import Layout from '../components/layout/Layout'
import HeroSection from '../components/sections/HeroSection'
import SecteursSection from '../components/sections/SecteursSection'
import SolutionSection from '../components/sections/SolutionSection'
import ProcessSection from '../components/sections/ProcessSection'
import FonctionnalitesSection from '../components/sections/FonctionnalitesSection'
import CtaSection from '../components/sections/CtaSection'
import TemoignagesSection from '../components/sections/TemoignagesSection'
import ContactHomeSection from '../components/sections/ContactHomeSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SecteursSection />
      <SolutionSection />
      <ProcessSection />
      <FonctionnalitesSection />
      <CtaSection />
      <TemoignagesSection />
      <ContactHomeSection />
    </Layout>
  )
}