import { Library, Search } from "lucide-react";
import { PlaylistSidebar } from "./PlaylistSidebar";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">

      <nav className='space-y-5 mt-2'>
        <button className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <i className="fa-solid fa-house text-xl" />
          Home
        </button>
        <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Search />
          Search
        </a>
        <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">

        <PlaylistSidebar
          imageSrc="/playlist.jpg"
          playlistName="Top Hits"
          artistName="João Otávio"
          type="Playlist"
        />
        <PlaylistSidebar
          imageSrc="/album1.jpg"
          playlistName="I AM YOU"
          artistName="YNW Melly"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album2.jpg"
          playlistName="Drip Harder"
          artistName="Lil Baby"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album3.jpg"
          playlistName="Just A Matter of Slime"
          artistName="YNW Melly"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album4.jpg"
          playlistName="Issa Album"
          artistName="21 Savage"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album5.jpg"
          playlistName="Harder Than Ever"
          artistName="Lil Baby"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album6.jpg"
          playlistName="Get Rich Or Die Tryin'"
          artistName="50 Cent"
          type="Album"
        />
        <PlaylistSidebar
          imageSrc="/album7.jpg"
          playlistName="HEROES & VILLAINS"
          artistName="Metro Boomin"
          type="Album"
        />
      </nav>
    </aside>
  );
}
