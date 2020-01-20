import React, { useContext } from 'react';
import { ScaleBand, ScaleLinear, ScaleTime } from 'd3-scale';

import Ruler from './ruler.component';

import { ChartContext, ChartContextType } from '../contexts';

import { Orientation } from '../types';

type Props = {
  xScale:
    | ScaleBand<string>
    | ScaleLinear<number, number>
    | ScaleTime<number, number>;
  yScale: ScaleBand<string> | ScaleLinear<number, number>;
  formatLabelHorizontal?: (label: any) => string | number;
};

const X_AXIS_PADDING = 5;

const Axes = ({ xScale, yScale, formatLabelHorizontal }: Props) => {
  const { theme, margins, svgDimensions } = useContext(
    ChartContext
  ) as ChartContextType;

  const axisX = theme.axisX.enabled && {
    x: 0,
    y: svgDimensions.height - margins.bottom + X_AXIS_PADDING,
    scale: xScale,
    orientation: Orientation.VERTICAL,
  };

  const axisY = theme.axisY.enabled && {
    x: margins.left - X_AXIS_PADDING,
    y: 0,
    scale: yScale,
    orientation: Orientation.HORIZONTAL,
  };

  return (
    <>
      {axisX && (
        <Ruler
          {...axisX}
          {...theme.axisX}
          formatLabelHorizontal={formatLabelHorizontal}
        />
      )}
      {axisY && <Ruler {...axisY} {...theme.axisY} />}
    </>
  );
};

export default Axes;
