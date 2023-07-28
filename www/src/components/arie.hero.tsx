'use client';

import React from 'react';

export function ArieHero() {
  return (
    <>
      <section className='py-20'>
        <div className='w-full px-4 mx-auto md:text-center md:px-8'>
          <div className='max-w-md mx-auto'>
            <h3 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>
              Arie®
            </h3>
            <p className='mt-3 text-sm text-gray-600'>
              A lightweight React library for presenting
              <br />
              cursor movement and interaction.
            </p>
          </div>
          <div className='flex items-center gap-3 mt-4 md:justify-center'>
            <a className='rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
              Toggle Component
            </a>
            <a
              href='https://github.com/chvndler/arie'
              className='rounded-full inline-block px-4 py-2.5 border border-transparent font-medium text-xs duration-150 hover:border-[#9E87C5] hover:bg-gray-50 active:bg-gray-100'>
              GitHub →
            </a>
          </div>
        </div>
      </section>

      <section className='relative'>
        <div
          aria-hidden
          className='absolute top-0 w-[1000px] z-10 h-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none'
          style={{
            backgroundImage: 'radial-gradient(#A4A4A3, transparent 50%)',
          }}
        />
        <svg
          className='absolute pointer-events-none inset-0 h-full w-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]'
          aria-hidden>
          <defs>
            <pattern
              id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'>
              <path
                d='M100 200V.5M.5 .5H200'
                fill='none'
              />
            </pattern>
          </defs>
          <svg
            x='50%'
            y={-1}
            className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
          />
        </svg>
      </section>
    </>
  );
}
