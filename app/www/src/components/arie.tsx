'use client';

import React from 'react';
import { useArie } from 'arie';

export const TrackArie = () => {
  const {
    selectedElement: {
      position: { angle: angle },
    },
  } = useArie(true, 'right', { x: 0, y: 0 });

  const rotate = 'rotate(' + angle + 'deg)';

  return (
    <>
      <div className='w-full px-4 mx-auto'>
        <div className='flex items-center justify-center max-w-xl mx-auto'>
          <div
            id='right'
            className='eye p-[12px] rounded-xl items-center'>
            <div
              className='pupil h-[6px] w-[34px] rounded-xl bg-[#9E87C5] shadow-sm border border-[#212326]'
              style={{
                transform: rotate,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
