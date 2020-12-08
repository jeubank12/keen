import React from 'react';

import { IconProps } from '../types';

const Image = ({ width, height, opacity, fill }: IconProps) => (
  <svg width={width} height={height} opacity={opacity} viewBox="0 0 100 100">
    <path
      fill={fill}
      d="M89.8110107,11 L100,21.1889893 L100,79.2662284 L89.8110107,89.4552177 L10.1889893,89.4552177 L0,79.2662284 L0,21.1889893 L10.1889893,11 L89.8110107,11 Z M89.8110107,21.1889893 L10.1889893,21.1889893 L10.188,69.312 L27.0008217,55.2902629 L42.7937551,69.2742528 L67.2473295,32.3411565 L89.811,64.705 L89.8110107,21.1889893 Z M27.0008217,27.3023829 C32.9094063,27.3023829 37.6992605,32.0922371 37.6992605,38.0008217 C37.6992605,43.9094063 32.9094063,48.6992605 27.0008217,48.6992605 C21.0922371,48.6992605 16.3023829,43.9094063 16.3023829,38.0008217 C16.3023829,32.0922371 21.0922371,27.3023829 27.0008217,27.3023829 Z"
    />
  </svg>
);

export default Image;
