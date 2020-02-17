/*eslint @typescript-eslint/no-empty-function: 0*/
import React, { FC } from 'react';
import {
  PieChart,
  PieChartSettings,
  ResponsiveWrapper,
  Legend,
  theme as defaultTheme,
} from '@keen.io/charts';

import ChartWidget from './chart-widget.component';
import {
  ContentSocket,
  LegendSocket,
  TitleSocket,
} from './widget-sockets.component';

import { legendSettings } from '../widget-settings';
import { LegendSettings } from '../types';

type Props = {
  /** Legend component settings */
  legend?: LegendSettings;
} & PieChartSettings;

/** Pie Chart widget integrated with other components */
export const PieChartWidget: FC<Props> = ({
  legend = legendSettings,
  theme = defaultTheme,
  ...props
}) => (
  <ChartWidget
    legendSettings={{
      position: legend.position,
      alignment: legend.alignment,
      layout: legend.layout,
    }}
  >
    <TitleSocket>
      <div>Widget Title</div>
      <div>Widget Sub-Title</div>
    </TitleSocket>
    {legend.enabled && (
      <LegendSocket>
        <Legend
          {...legend}
          onClick={() => {}}
          labels={props.keys.map((key, idx) => ({
            name: key,
            color: theme.colors[idx],
          }))}
        />
      </LegendSocket>
    )}
    <ContentSocket>
      <ResponsiveWrapper>
        {(width: number, height: number) => (
          <PieChart
            {...props}
            theme={theme}
            svgDimensions={{ width, height }}
          />
        )}
      </ResponsiveWrapper>
    </ContentSocket>
  </ChartWidget>
);

export default PieChartWidget;