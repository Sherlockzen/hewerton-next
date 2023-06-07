import Image from 'next/image'
import BtnTheme from './components/btnTheme'
import { ProfileInfo } from './components/profileInfo'

export default function Home() {
  return (
    <main className=' bg-back-dark w-[100svw] h-[100svh] flex flex-col items-center text-white p-8'>
      <BtnTheme/>
      <ProfileInfo/>
    </main>
  )
}
