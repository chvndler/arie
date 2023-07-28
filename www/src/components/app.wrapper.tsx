'use client';

import React from 'react';

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='mx-auto flex h-full w-full max-w-[50rem] flex-col'>
        {children}
      </div>
    </>
  );
}
