import Image from "next/image";

interface PlaylistPreviewProps {
    imageSrc: string;
    title: string;
}

export function PlaylistPreview({ imageSrc, title }: PlaylistPreviewProps) {
    return (
        <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src={imageSrc} width={104} height={104} alt={title} />
            <div className='flex-1'>
                <strong className='block max-w-full leading-tight'>{title}</strong>
            </div>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <i className="fa-solid fa-play text-xl"></i>
            </button>
        </a>
    );
}
