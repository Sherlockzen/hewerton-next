import Image from 'next/image'
import BtnTheme from './components/btnTheme'
import { ProfileInfo } from './components/profileInfo'

export default function Home() {
  return (
    <main className=' bg-back-dark w-screen h-screen flex flex-col items-center text-white p-8'>
      <BtnTheme/>
      <ProfileInfo/>
    </main>
  )
}
