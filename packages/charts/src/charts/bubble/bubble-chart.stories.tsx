import * as React from 'react';
import { object, number } from '@storybook/addon-knobs';

import { axisXKnobs, axisYKnobs, gridKnobs } from '@keen.io/storybook-utils';

import { BubbleChart } from './bubble-chart.component';
import { chartData } from './bubble-chart.fixtures';

import { theme as keenTheme } from '../../theme';

export default {
  title: 'Visualizations|Bubble Chart|Plot',
  parameters: {
    component: BubbleChart,
    componentSubtitle: 'Bubble Chart plot',
  },
};

const createThemeKnobs = () => ({
  ...keenTheme,
  axisX: axisXKnobs('Axis X'),
  axisY: axisYKnobs('Axis Y'),
  gridX: gridKnobs('Grid X'),
  gridY: gridKnobs('Grid Y'),
});

export const plot = () => (
  <div
    style={{
      width: '700px',
      height: '500px',
    }}
  >
    <BubbleChart
      labelSelector="channel"
      valueKey="cost"
      xDomainKey="users"
      yDomainKey="conversion"
      minAreaRadius={number('Min area radius', 5, { min: 5, max: 40 }, 'Chart')}
      maxAreaRadius={number(
        'Max area radius',
        40,
        { min: 5, max: 40 },
        'Chart'
      )}
      svgDimensions={object(
        'svg',
        {
          width: 700,
          height: 500,
        },
        'Chart'
      )}
      margins={object(
        'Margins',
        { top: 50, right: 20, bottom: 50, left: 40 },
        'Chart'
      )}
      theme={createThemeKnobs()}
      data={chartData}
    />
  </div>
);
