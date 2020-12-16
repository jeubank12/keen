import React from 'react';

import { IconProps } from '../types';

const Resize = ({ width, height, opacity, fill }: IconProps) => (
  <svg width={width} height={height} opacity={opacity} viewBox="0 0 100 100">
    <path
      fill={fill}
      d="M64.9077085,54.3029844 L83.1259844,72.5229844 L93.6310882,62.0188658 L99.992975,64.6552164 L100,96.2744639 L96.2744639,100 L64.6552164,99.992975 L62.0188658,93.6310882 L72.5229844,83.1259844 L54.3029844,64.9077085 L54.3029844,58.2510202 L58.2510202,54.3029844 L64.9077085,54.3029844 Z M3.72553614,9.97140148e-11 L35.3447836,0.00702502695 L37.9811342,6.36891178 L27.476,16.873 L45.7672309,35.1625067 L45.7672309,41.819195 L41.819195,45.7672309 L35.1625067,45.7672309 L16.873,27.476 L6.36891178,37.9811342 L0.00702502696,35.3447836 L1.13615783e-10,3.72553614 L3.72553614,9.97140148e-11 Z"
    />
  </svg>
);

export default Resize;
