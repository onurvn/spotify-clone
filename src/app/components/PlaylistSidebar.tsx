import Image from 'next/image';

interface PlaylistSidebarProps {
  href?: string;
  imageSrc: string;
  playlistName: string;
  artistName: string;
  type: string;
}

export function PlaylistSidebar({ href = '', imageSrc, playlistName, artistName, type }: PlaylistSidebarProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 p-2 rounded-md bg-transparent hover:bg-white/10 transition-colors hover:scale-105 transform duration-300 ease-in-out group relative"
    >
      <div className="relative">
        <Image src={imageSrc} width={48} height={48} alt={playlistName} className="rounded transition-transform duration-300 ease-in-out group-hover:brightness-75" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded" />
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <i className="fa-solid fa-play text-xl" />
        </button>
      </div>

      <div className="flex flex-col">
        <strong className="text-sm">{playlistName}</strong>
        <span className="text-xs text-zinc-500">{type} • {artistName}</span>
      </div>
    </a>
  );
}
