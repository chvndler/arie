'use client';

import React from 'react';
import { useArie } from 'arie';

export function AriePosition() {
  const arie = useArie();
  const position = arie.position.client;

  return (
    <>
      <div className='w-full px-4 mx-auto md:text-center md:px-8'>
        <div className='flex flex-row items-center justify-center max-w-md gap-4 mx-auto font-mono text-xs'>
          <div>X.{position.x && position.x.toExponential(2)}</div>
          <div>Y.{position.y && position.y.toExponential(2)}</div>
        </div>
      </div>
    </>
  );
}
