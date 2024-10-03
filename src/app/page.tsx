'use client';

import * as React from 'react';
import '@/lib/env';

import FrameContent from '@/app/components/FrameContent/FrameContent';
import HeroContent from '@/app/components/HeroContent/HeroContent';
import MainFrame from '@/app/components/MainFrame/MainFrame';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className='bg-[#02061D] px-4'>
      <section>
        <MainFrame>
          <FrameContent>
            <HeroContent />
            {/* <div className='h-[20em]'></div> */}
          </FrameContent>
        </MainFrame>
      </section>
    </main>
  );
}
