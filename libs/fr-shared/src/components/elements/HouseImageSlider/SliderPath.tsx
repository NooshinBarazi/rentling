import * as React from 'react';

function MemoSliderPath(props: any) {
  return (
    // position absolute makes our path svg don't use any space in the parent div we want to import
    <svg style={{ position: 'absolute' }}>
      <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M1,0.99 V0.011 C0.875,0.123,0.7,0.192,0.506,0.192 C0.306,0.192,0.126,0.118,0,0.001 v1 C0.126,0.883,0.306,0.81,0.506,0.81 c0.194,0,0.369,0.069,0.494,0.18"></path>
      </clipPath>
    </svg>
  );
}

export const SliderPath = React.memo(MemoSliderPath);
