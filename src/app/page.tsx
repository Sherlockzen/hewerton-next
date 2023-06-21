"use client"
import BtnTheme from './components/btnTheme'
import { ProfileInfo } from './components/profileInfo'
import ProfileFacts from './components/profileFacts'
import ProfileBtn from './components/profileBtn'
import TabsBtn from './components/tabsBtn'
import { useState } from 'react'



export default function Home() {
  const [teste, setTeste] = useState(50);
  
  return (
    <main className='  w-[100svw] min-h-[100svh] flex flex-col items-center p-8 gap-8'>
      <BtnTheme/>
      <ProfileInfo/>
      <ProfileFacts/>
      <ProfileBtn/>
      <TabsBtn/>
    </main>
  )
}
