import { ScaleBand, ScaleLinear, ScaleTime } from 'd3-scale';

import { generateTicks } from '../utils';

import { Orientation } from '../types';

type Options = {
  x: number;
  y: number;
  tickSize: number;
  scale:
    | ScaleBand<string>
    | ScaleLinear<number, number>
    | ScaleTime<number, number>;
  orientation: Orientation;
  formatLabelHorizontal?: (label: any) => string | number;
};

export const createRuler = ({
  x,
  y,
  tickSize,
  scale,
  orientation,
  formatLabelHorizontal,
}: Options) => {
  const [scaleStart, scaleEnd] = scale.range();
  const ticks = generateTicks({
    x,
    y,
    tickSize,
    scale,
    orientation,
    formatLabelHorizontal,
  });
  let line;

  if (orientation === Orientation.VERTICAL) {
    line = {
      x1: scaleStart,
      x2: scaleEnd,
      y1: y,
      y2: y,
    };
  } else {
    line = {
      x1: x,
      x2: x,
      y1: scaleStart,
      y2: scaleEnd,
    };
  }

  return {
    line,
    ticks,
  };
};
