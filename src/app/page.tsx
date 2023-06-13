'use client'
import BtnTheme from './components/btnTheme'
import { ProfileInfo } from './components/profileInfo'
import ProfileFacts from './components/profileFacts'
import ProfileBtn from './components/profileBtn'
import TabsBtn from './components/tabsBtn'
import PortifolioContent from "@/app/components/portifolioContent";
import {useState} from "react";
import { useDarkTheme } from './store/globals'
import useStore from './store/useStore'

export default function Home() {
  const theme = useStore(useDarkTheme, (state) => state.theme);
  return (
    <main data-theme={theme ? 'dark' : 'winter'} className='  w-[100svw] min-h-[100svh] flex flex-col items-center p-8 gap-8'>
      <BtnTheme/>
      <ProfileInfo/>
      <ProfileFacts/>
      <ProfileBtn/>
      <TabsBtn/>
    </main>
  )
}
