import { SectionOffer } from '@Components/molecules/SectionOffer'
import { Header } from '@Components/molecules/Header'
import { SectionHero } from '@Components/molecules/SectionHero'
import { SectionLearn } from '@Components/molecules/SectionLearn'
import { SectionModules } from '@Components/molecules/SectionModules'
import { SectionTestemonies } from '@Components/molecules/SectionTestemonies'
import { SectionAbout } from '@Components/molecules/SectionAbout'
import { SectionFaq } from '@Components/molecules/SectionFaq'
import { Footer } from '@Components/molecules/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero image={'img/content.png'} />
      <SectionOffer />
      <SectionLearn />
      <SectionModules image={'img/module.png'} />
      <SectionTestemonies />
      <SectionAbout image={'img/wave.png'} />
      <SectionFaq />
      <Footer />
    </>
  )
}
