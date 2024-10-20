import Image from "next/image";

interface AlbumCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export function AlbumCard({ imageSrc, title, description }: AlbumCardProps) {
  return (
    <div className="relative bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors group">
      <a href="#" className="relative flex flex-col gap-2">

        <div className="relative">
          <Image
            src={imageSrc}
            className="w-full"
            width={120}
            height={120}
            alt={title}
          />

          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-play text-xl"></i>
          </button>
        </div>

        <strong className="font-semibold">{title}</strong>
        <span className="text-sm text-zinc-400">{description}</span>
      </a>
    </div>
  );
}
