import Image from 'next/image';
import React from 'react';

interface MainFrameProps {
  children: React.ReactNode;
}

export default function MainFrame(
  { children }: MainFrameProps = { children: null }
) {
  return (
    <div className='relative mx-auto'>
      <div className='w-full h-full flex flex-col justify-center items-center gap-3.5 border-x border-x-[#242631]'>
        {children}
      </div>
      <div
        className='absolute left-[-1.5%] top-[-1.5%]'
        style={{ width: '3%', height: '3%' }}
      >
        <Image
          src='/svg/cross-vector.svg'
          alt='Top left cross'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div
        className='absolute right-[-1.5%] top-[-1.5%]'
        style={{ width: '3%', height: '3%' }}
      >
        <Image
          src='/svg/cross-vector.svg'
          alt='Top right cross'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <style jsx>{`
        .absolute > div {
          background-color: #a6accb;
        }
      `}</style>
    </div>
  );
}
