import React, { FC, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip, BulletList } from '@keen.io/ui-core';
import { useTooltip } from '@keen.io/react-hooks';

import {
  generateCircularChart,
  LabelsPosition,
  calculateTotalValue,
} from '../../utils';
import { getCircularChartTooltipContent } from '../../utils/tooltip.utils';

import DonutSlice from './donut-slice.component';
import ShadowFilter from '../../components/shadow-filter.component';

import { ChartBase, Delayed } from '../../components';
import DonutTotal from './donut-total.component';

import { theme as defaultTheme } from '../../theme';

import { CommonChartSettings, TooltipFormatter } from '../../types';

import { TOOLTIP_MOTION } from '../../constants';

export type Props = {
  /** Chart data */
  data: Record<string, any>[];
  /** Name of data object property used to create series */
  labelSelector?: string;
  /** Keys picked from data object used to genrate slices */
  keys?: string[];
  /** Labels that are disabled for rendering data series */
  disabledLabels?: string[];
  /** Spacing between donut slices */
  padAngle?: number;
  /** Radius between donut slices */
  padRadius?: number;
  /** Arc corner radius */
  cornerRadius?: number;
  /** Radius of inner circle - relative to outer radius [0, 1] */
  innerRadius?: number;
  /** The radius for slice labels */
  labelsRadius?: number;
  /** Show labels inside or outside donut slices */
  labelsPosition?: LabelsPosition;
  /** Automatically adjust labels color */
  labelsAutocolor?: boolean;
  /** Stack the arcs if percent value is lower than provided treshold */
  stackTreshold?: number;
  /** Return dataKeys after stacking */
  onDataStack?: (keys: string[]) => void;
  /** Tooltip formatter */
  formatTooltip?: TooltipFormatter;
} & CommonChartSettings;

export const DonutChart: FC<Props> = ({
  data,
  svgDimensions,
  theme = defaultTheme,
  margins = { top: 30, right: 20, bottom: 30, left: 40 },
  labelSelector = 'name',
  keys = ['value'],
  disabledLabels = [],
  padAngle = 0.02,
  padRadius = 100,
  cornerRadius = 2,
  innerRadius = 0.5,
  labelsRadius = 30,
  labelsPosition = 'inside',
  labelsAutocolor = true,
  stackTreshold = 4,
  onDataStack,
  formatTooltip,
}) => {
  const [treshold] = useState(() => {
    if (!stackTreshold) return 0;
    const total = calculateTotalValue(data, labelSelector, keys);
    return total * (stackTreshold / 100);
  });

  const {
    total: totalValue,
    arcs,
    drawArc,
    stackedElem,
  } = generateCircularChart({
    data,
    margins,
    padAngle,
    padRadius,
    cornerRadius,
    innerRadius,
    labelSelector,
    labelsRadius,
    keys,
    disabledLabels,
    labelsPosition,
    dimension: svgDimensions,
    colors: theme.colors,
    type: 'donut',
    treshold,
  });

  useEffect(() => {
    onDataStack && onDataStack(stackedElem);
  }, []);

  const svgElement = useRef<SVGSVGElement>(null);

  const {
    tooltipVisible,
    tooltipPosition,
    tooltipSelectors,
    updateTooltipPosition,
    hideTooltip,
  } = useTooltip(svgElement);

  const { tooltip: tooltipSettings, donut: donutSettings } = theme;
  const {
    enabled: totalEnabled,
    label: donutTotalLabel,
    value: donutTotalValue,
  } = donutSettings.total;
  return (
    <>
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            {...TOOLTIP_MOTION}
            initial={{ opacity: 0, x: tooltipPosition.x, y: tooltipPosition.y }}
            animate={{
              x: tooltipPosition.x,
              y: tooltipPosition.y,
              opacity: 1,
            }}
            style={{
              position: 'absolute',
              pointerEvents: 'none',
            }}
          >
            <Tooltip mode={tooltipSettings.mode} hasArrow={false}>
              {tooltipSelectors && (
                <BulletList
                  list={getCircularChartTooltipContent({
                    data,
                    keys,
                    labelSelector,
                    selectors: tooltipSelectors,
                    disabledLabels,
                    formatValue: formatTooltip,
                  })}
                  typography={tooltipSettings.labels.typography}
                />
              )}
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>
      <Delayed>
        <ChartBase
          ref={svgElement}
          theme={theme}
          svgDimensions={svgDimensions}
          margins={margins}
        >
          <g
            style={{
              transform: `translate(${svgDimensions.width /
                2}px, ${svgDimensions.height / 2}px)`,
            }}
          >
            <ShadowFilter />
            <AnimatePresence>
              {arcs.map(
                ({
                  dataKey,
                  label,
                  labelPosition,
                  activePosition,
                  startAngle,
                  endAngle,
                  color,
                  selector,
                  stacked,
                  stack,
                }) => (
                  <DonutSlice
                    key={dataKey}
                    id={dataKey}
                    draw={drawArc}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    label={label}
                    autocolor={labelsAutocolor}
                    activePosition={activePosition}
                    labelPosition={labelPosition}
                    background={color}
                    onMouseMove={e => {
                      if (tooltipSettings.enabled) {
                        if (stacked) updateTooltipPosition(e, stack);
                        else updateTooltipPosition(e, [{ color, selector }]);
                      }
                    }}
                    onMouseLeave={() => hideTooltip()}
                  />
                )
              )}
            </AnimatePresence>
            {totalEnabled && (
              <DonutTotal
                total={{
                  label: donutTotalLabel.typography,
                  value: donutTotalValue.typography,
                }}
              >
                {totalValue}
              </DonutTotal>
            )}
          </g>
        </ChartBase>
      </Delayed>
    </>
  );
};

export default DonutChart;
