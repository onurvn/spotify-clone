import { Laptop2, LayoutList, Maximize2, Mic2, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between fixed bottom-0 left-0 right-0 z-10">
            <div className='flex items-center gap-3'>
                <Image src="/album7.jpg" width={56} height={56} alt='Album' />
                <div className='flex flex-col'>
                    <strong className='text-normal'>Murder In My Mind</strong>
                    <span className='text-xs text-zinc-400'>GRAVECHILL, RHODAMINE, VTORNIK </span>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center gap-6'>
                    <Shuffle size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
                    <SkipBack size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
                    <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black hover:bg-gray-200 hover:text-black hover:scale-110 transition-all duration-300'>
                        <i className="fas fa-play"></i>
                    </button>
                    <SkipForward size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
                    <Repeat size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
                </div>

                <div className='relative flex items-center gap-2'>
                    <span className='text-sx text-zinc-400'>1:36</span>
                    <div className='relative h-1 rounded-full w-96 bg-zinc-600'>
                        <div className='relative h-full bg-zinc-200 rounded-full w-40 hover:bg-green-500'>
                            <div className='absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                    </div>
                    <span className='text-sx text-zinc-400'>3:03</span>
                </div>

            </div>

            <div className='flex items-center gap-4'>
                <Mic2 size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
                <LayoutList size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
                <Laptop2 size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
                <div className='flex items-center gap-2'>
                    <Volume size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
                    <div className='h-1 rounded-full w-24 bg-zinc-600'>
                        <div className='bg-zinc-200 w-10 h-1 rounded-full hover:bg-green-500' />
                    </div>
                </div>
                <Maximize2 size={20} className='text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300' />
            </div>

        </footer>
    );
}
