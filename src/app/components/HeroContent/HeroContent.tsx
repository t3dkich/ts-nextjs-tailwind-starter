import React from 'react';

import TextButton from '@/components/buttons/TextButton';

export default function HeroContent() {
  return (
    <div className='flex flex-col justify-center items-center w-full max-w-[342px] gap-5 text-center'>
      <h1 className='text-[23px] font-bold leading-[31px] text-d-etf text-shadow-d-etf'>
        Trade Everything, Everywhere{' '}
        <span className='font-normal text-d-etf-subtext'>on Your</span>{' '}
        <span className='text-d-etf-blue'>All-in-One trading</span>{' '}
        <span className='font-normal text-d-etf-subtext'>
          Platform for Everyone.
        </span>
      </h1>
      <p className='text-xs font-medium leading-[19px] text-d-etf-subtext capitalize'>
        Invest Securely With D-ETF. Build And Diversify Your Portfolio In
        Stocks, Crypto, ETFs, And More, All With The Confidence That Your Assets
        Are Safe.
      </p>
      <TextButton>Text</TextButton>
    </div>
  );
}
