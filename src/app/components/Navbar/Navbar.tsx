import { MenuIcon } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-[#050B31] w-full'>
      <div className='relative w-[61px] h-[18px]'>
        <Image
          src='/svg/d-etf-logo.svg'
          alt='D-ETF Logo'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <button className='text-white'>
        <MenuIcon className='w-6 h-6' />
      </button>
    </nav>
  );
}
