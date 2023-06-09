import Image from 'next/image'
import BtnTheme from './components/btnTheme'
import { ProfileInfo } from './components/profileInfo'
import ProfileFacts from './components/profileFacts'
import ProfileBtn from './components/profileBtn'
import TabsBtn from './components/tabsBtn'
import PortifolioContent from "@/app/components/portifolioContent";

export default function Home() {
  return (
    <main data-theme='retro' className=' bg-back-dark w-[100svw] min-h-[100svh] flex flex-col flex items-center text-white p-8 gap-8'>
      <BtnTheme/>
      <ProfileInfo/>
      <ProfileFacts/>
      <ProfileBtn/>
      <TabsBtn/>
    </main>
  )
}
