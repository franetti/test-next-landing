import Category from '../components/home/Categorys'
import Hero from '@/components/home/Hero'
import Body from '../components/home/Body'

export default function Page() {
  return (
    <main className="min-w-screen">
      <Hero/>
      <Body/>
      <Category/>
    </main>
  )
}