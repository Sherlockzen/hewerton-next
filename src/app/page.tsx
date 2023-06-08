import Image from 'next/image'
import BtnTheme from './components/btnTheme'
import { ProfileInfo } from './components/profileInfo'
import ProfileFacts from './components/profileFacts'
import ProfileBtn from './components/profileBtn'

export default function Home() {
  return (
    <main className=' bg-back-dark w-[100svw] h-[100svh] flex flex-col items-center text-white p-8 gap-8'>
      <BtnTheme/>
      <ProfileInfo/>
      <ProfileFacts/>
      <ProfileBtn/>
    </main>
  )
}
