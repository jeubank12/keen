import React from 'react';
import {
  render as rtlRender,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import ChoroplethChart from './choropleth-chart.component';

const render = (overProps: any = {}) => {
  const svgDimensions = {
    width: 600,
    height: 300,
  };
  const data = [{ 'geo.country': 'Poland', result: 1230 }];
  const topology = {
    type: 'FeaturesCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          name: 'Poland',
          iso_3166_2: 'PL',
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [15.01699588385867, 51.10667409932158],
              [14.607098422919535, 51.745188096719964],
              [14.685026482815688, 52.0899474147552],
              [14.4375997250022, 52.62485016540838],
              [14.074521111719491, 52.98126251892543],
              [14.353315463934138, 53.24817129171297],
              [14.119686313542587, 53.75702912049103],
              [14.802900424873458, 54.05070628520575],
              [16.36347700365573, 54.513158677785725],
              [17.622831658608675, 54.85153595643291],
              [18.62085859546164, 54.68260569927078],
              [18.696254510175464, 54.43871877706929],
              [19.660640089606403, 54.42608388937393],
              [20.892244500418624, 54.31252492941253],
              [22.731098667092652, 54.327536932993326],
              [23.24398725758951, 54.22056671814914],
              [23.48412763844985, 53.91249766704114],
              [23.527535841575002, 53.470121568406555],
              [23.80493493011778, 53.089731350306074],
              [23.799198846133375, 52.69109935160657],
              [23.199493849386187, 52.486977444053664],
              [23.508002150168693, 52.02364655212473],
              [23.52707075368437, 51.57845408793023],
              [24.029985792748903, 50.70540660257518],
              [23.922757195743262, 50.42488108987875],
              [23.426508416444392, 50.30850576435745],
              [22.518450148211603, 49.47677358661974],
              [22.776418898212626, 49.02739533140962],
              [22.558137648211755, 49.085738023467144],
              [21.607808058364213, 49.47010732685409],
              [20.887955356538413, 49.32877228453583],
              [20.41583947111985, 49.43145335549977],
              [19.825022820726872, 49.21712535256923],
              [19.320712517990472, 49.571574001659194],
              [18.909574822676316, 49.435845852244576],
              [18.853144158613617, 49.49622976337764],
              [18.392913852622172, 49.98862864847075],
              [17.64944502123899, 50.049038397819956],
              [17.55456709155112, 50.36214590107641],
              [16.868769158605655, 50.47397370055603],
              [16.719475945714436, 50.21574656839354],
              [16.176253289462267, 50.42260732685791],
              [16.23862674323857, 50.69773265237984],
              [15.490972120839727, 50.78472992614321],
              [15.01699588385867, 51.10667409932158],
            ],
          ],
        },
      },
    ],
  };
  const labelSelector = 'geo.country';
  const geoKey = 'geo.country';
  const colorMode = 'continuous';
  const colorSteps = 5;
  const valueKey = 'result';
  const formatTooltip = value => `$${value}`;

  const props = {
    svgDimensions,
    data,
    labelSelector,
    geoKey,
    colorMode,
    colorSteps,
    valueKey,
    topology,
    formatTooltip,
    ...overProps,
  };

  const wrapper = rtlRender(<ChoroplethChart {...props} />);

  return {
    wrapper,
    props,
  };
};

test('formats tooltip value', async () => {
  const {
    wrapper: { getByText, container },
    props: { data, geoKey, formatTooltip },
  } = render();

  const choroplethChart = container.querySelector('svg');
  fireEvent.mouseOver(choroplethChart.querySelector('path'));

  const [firstSeries] = data;
  const key = firstSeries[geoKey];
  const { result } = firstSeries;

  await waitFor(() => {
    expect(getByText(`${key} - ${formatTooltip(result)}`)).toBeInTheDocument();
  });
});
