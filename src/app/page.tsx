import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { PlaylistPreview } from './components/PlaylistPreview'
import { AlbumCard } from './components/AlbumCard'
import '@fortawesome/fontawesome-free/css/all.min.css'

const playlists = [
  { imageSrc: "/album1.jpg", title: "HAPPY" },
  { imageSrc: "/album2.jpg", title: "MIX" },
  { imageSrc: "/album3.jpg", title: "NIGHT LOVELL MIX" },
  { imageSrc: "/album4.jpg", title: "DAILY MIX" },
  { imageSrc: "/album5.jpg", title: "FUTURE MIX" },
  { imageSrc: "/album7.jpg", title: "HOT HITS" },
]

const albums = [
  { imageSrc: "/album1.jpg", title: "Daily Mix 1", description: "YNW Melly, Lil Baby, Future and more" },
  { imageSrc: "/album2.jpg", title: "Daily Mix 2", description: "YNW Melly, Lil Baby, Future and more" },
  { imageSrc: "/album3.jpg", title: "Daily Mix 3", description: "YNW Melly, Lil Baby, Future and more" },
  { imageSrc: "/album4.jpg", title: "Daily Mix 4", description: "YNW Melly, Lil Baby, Future and more" },
  { imageSrc: "/album5.jpg", title: "Daily Mix 5", description: "YNW Melly, Lil Baby, Future and more" },
]

const NavigationButtons = () => (
  <div className='flex items-center gap-4'>
    <button className='rounded-full bg-black/40 p-1'>
      <ChevronLeft />
    </button>
    <button className='rounded-full bg-black/40 p-1'>
      <ChevronRight />
    </button>
  </div>
)

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className='font-semibold text-2xl mt-10'>{title}</h2>
)

const PlaylistGrid = ({ items }: { items: typeof playlists }) => (
  <div className='grid grid-cols-3 gap-4 mt-4'>
    {items.map((item, index) => (
      <PlaylistPreview key={index} imageSrc={item.imageSrc} title={item.title} />
    ))}
  </div>
)

const AlbumGrid = ({ items }: { items: typeof albums }) => (
  <div className='grid grid-cols-5 gap-4 mt-4'>
    {items.map((item, index) => (
      <AlbumCard key={index} imageSrc={item.imageSrc} title={item.title} description={item.description} />
    ))}
  </div>
)

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 pb-32">
          <NavigationButtons />

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <PlaylistGrid items={playlists} />

          <SectionTitle title="Recently updated" />
          <AlbumGrid items={albums} />

          <SectionTitle title="Jump back in" />
          <AlbumGrid items={albums} />
        </main>
      </div>
      <Footer />
    </div>
  )
}