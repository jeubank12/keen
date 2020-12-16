import React from 'react';

import { IconProps } from '../types';

const Delete = ({ width, height, opacity, fill }: IconProps) => (
  <svg width={width} height={height} opacity={opacity} viewBox="0 0 100 100">
    <path
      fill={fill}
      d="M85,30 L85,92 C85,96.1140137 81.0759277,100 77,100 L23,100 C19.0268555,100 15,96.1140137 15,92 L15,30 L85,30 Z M30,39 C27.5837542,39 25.6122919,41.0375701 25.5046306,43.59442 L25.5,43.8148148 L25.5,86.1851852 C25.5,88.844334 27.5147186,91 30,91 C32.4162458,91 34.3877081,88.9624299 34.4953694,86.40558 L34.5,86.1851852 L34.5,43.8148148 C34.5,41.155666 32.4852814,39 30,39 Z M50,39 C47.5837542,39 45.6122919,41.0375701 45.5046306,43.59442 L45.5,43.8148148 L45.5,86.1851852 C45.5,88.844334 47.5147186,91 50,91 C52.4162458,91 54.3877081,88.9624299 54.4953694,86.40558 L54.5,86.1851852 L54.5,43.8148148 C54.5,41.155666 52.4852814,39 50,39 Z M70,39 C67.5837542,39 65.6122919,41.0375701 65.5046306,43.59442 L65.5,43.8148148 L65.5,86.1851852 C65.5,88.844334 67.5147186,91 70,91 C72.4162458,91 74.3877081,88.9624299 74.4953694,86.40558 L74.5,86.1851852 L74.5,43.8148148 C74.5,41.155666 72.4852814,39 70,39 Z M50,0 C56.627417,0 62,5.372583 62,12 L86.5,12 C90.0898509,12 93,14.9101491 93,18.5 C93,22.0898509 90.0898509,25 86.5,25 L13.5,25 C9.91014913,25 7,22.0898509 7,18.5 C7,14.9101491 9.91014913,12 13.5,12 L38,12 C38,5.372583 43.372583,0 50,0 Z"
    />
  </svg>
);

export default Delete;
