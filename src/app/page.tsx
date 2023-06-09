'use client'
import BtnTheme from './components/btnTheme'
import { ProfileInfo } from './components/profileInfo'
import ProfileFacts from './components/profileFacts'
import ProfileBtn from './components/profileBtn'
import TabsBtn from './components/tabsBtn'
import PortifolioContent from "@/app/components/portifolioContent";
import {useState} from "react";

export default function Home() {
  const [dark, setDark] = useState(true) //true = dark | false = light
    console.log(dark)
  return (
    <main data-theme={dark ? 'dark' : 'winter'} className='  w-[100svw] min-h-[100svh] flex flex-col items-center p-8 gap-8'>
      <BtnTheme theming={() => setDark(!dark)}/>
      <ProfileInfo/>
      <ProfileFacts/>
      <ProfileBtn/>
      <TabsBtn/>
    </main>
  )
}
