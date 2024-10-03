import React from 'react';

interface FrameContentProps {
  children: React.ReactNode;
}

export default function FrameContent({ children }: FrameContentProps) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full gap-3.5 pt-6 px-2'>
      {children}
    </div>
  );
}
