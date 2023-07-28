'use client';

import React from 'react';

export function ArieHero() {
  return (
    <>
      <div className='relative'>
        <div
          aria-hidden
          className='absolute top-0 w-[1000px] z-10 h-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none'
          style={{
            backgroundImage: 'radial-gradient(#A4A4A3, transparent 50%)',
          }}
        />
      </div>
    </>
  );
}
