import { scaleBand, scaleLinear, scaleUtc } from 'd3-scale';

import {
  getCenterPosition,
  getScaleValues,
  generateTicks,
  normalizeToPercent,
  calculateRange,
  EDGE_TICK_ALIGN,
  calculateColorScale,
} from './utils';

import { Orientation } from './types';

describe('@keen.io/charts - utils', () => {
  const domain = ['Sales', 'Marketing', 'E-commerce'];
  const RealDate = Date;

  beforeAll(() => {
    global.Date = jest.fn().mockImplementation(date => new RealDate(date));
    global.Date.UTC = jest
      .fn()
      .mockImplementation(date => new RealDate(date).getUTCDate());
  });

  afterAll(() => {
    global.Date = RealDate;
  });

  describe('normalizeToPercent()', () => {
    const fixture = [
      { day: 'Monday', woman: 10, man: 5 },
      { day: 'Tuesday', woman: 20, man: 20 },
    ];

    it('should convert values to percents', () => {
      expect(normalizeToPercent(fixture, ['man', 'woman']))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "day": "Monday",
            "man": 33.33333333333333,
            "woman": 66.66666666666666,
          },
          Object {
            "day": "Tuesday",
            "man": 50,
            "woman": 50,
          },
        ]
      `);
    });
  });

  describe('calculateRange()', () => {
    const data = [
      { label: 'January', sale: -3, buy: 11, revenue: 30 },
      { label: 'February', sale: 12, buy: 3, revenue: 21 },
    ];

    it('should calculate minimum and maximum values for provided keys', () => {
      const { minimum, maximum } = calculateRange(data, 'auto', 'auto', [
        'sale',
        'revenue',
      ]);

      expect(minimum).toEqual(-3);
      expect(maximum).toEqual(30);
    });

    it('should return defined minimum and maximum values', () => {
      const minValue = -2;
      const maxValue = 10;

      const { minimum, maximum } = calculateRange([], minValue, maxValue, []);

      expect(minimum).toEqual(minValue);
      expect(maximum).toEqual(maxValue);
    });

    it('should return default value for minimum greater than 0', () => {
      const minValue = 3;
      const maxValue = 10;

      const { minimum } = calculateRange([], minValue, maxValue, []);

      expect(minimum).toEqual(0);
    });
  });

  describe('generateTicks()', () => {
    const rangeStart = 0;
    const rangeEnd = 0;
    const tickSize = 10;
    const firstDate = new Date('2020-01-01T00:00:00.000Z');
    const lastDate = new Date('2020-06-01T00:00:00.000Z');

    it('should create additional ticks', () => {
      const scale = scaleBand()
        .range([rangeStart, rangeEnd])
        .domain(domain);
      const ticks = generateTicks({
        x: 0,
        y: 0,
        scale,
        tickSize,
      });

      expect(ticks.length).toEqual(5);
    });

    it('should create ticks for vertical linear scale', () => {
      const scale = scaleLinear()
        .range([rangeStart, rangeEnd])
        .domain([0, 90]);

      const ticks = generateTicks({
        x: 0,
        y: 0,
        scale,
        tickSize,
        orientation: Orientation.VERTICAL,
      });

      expect(ticks).toMatchSnapshot();
    });

    it('should create ticks for horizontal linear scale', () => {
      const scale = scaleLinear()
        .range([rangeStart, rangeEnd])
        .domain([0, 90]);

      const ticks = generateTicks({
        x: 0,
        y: 0,
        scale,
        tickSize,
        orientation: Orientation.HORIZONTAL,
      });

      expect(ticks).toMatchSnapshot();
    });

    it('should create ticks for horizontal Utc scale', () => {
      const scale = scaleUtc()
        .range([rangeStart, rangeEnd])
        .domain([firstDate, lastDate]);

      const ticks = generateTicks({
        x: 0,
        y: 0,
        scale,
        tickSize,
        orientation: Orientation.HORIZONTAL,
      });

      expect(ticks).toMatchSnapshot();
    });

    it('should create ticks for vertical band scale', () => {
      const scale = scaleBand()
        .range([rangeStart, rangeEnd])
        .domain(domain);

      const ticks = generateTicks({
        x: 0,
        y: 0,
        scale,
        tickSize,
        orientation: Orientation.VERTICAL,
      });

      expect(ticks).toMatchSnapshot();
    });

    it('should create ticks for horizontal band scale', () => {
      const scale = scaleBand()
        .range([rangeStart, rangeEnd])
        .domain(domain);

      const ticks = generateTicks({
        x: 0,
        y: 0,
        scale,
        tickSize,
        orientation: Orientation.HORIZONTAL,
      });

      expect(ticks).toMatchSnapshot();
    });

    it('should increase size of edge ticks', () => {
      const scale = scaleBand()
        .range([rangeStart, rangeEnd])
        .domain(domain);
      const ticks = generateTicks({
        x: 0,
        y: 0,
        scale,
        tickSize,
      });

      const edgeTicks = ticks.slice(ticks.length - 2, ticks.length);
      edgeTicks.forEach(({ size }) => {
        expect(size).toEqual(tickSize + EDGE_TICK_ALIGN);
      });
    });
  });

  describe('getScaleValues()', () => {
    const firstDate = new Date('2020-01-01T00:00:00.000Z');
    const lastDate = new Date('2020-06-01T00:00:00.000Z');

    it('should return domain for band scale', () => {
      const scale = scaleBand().domain(domain);

      expect(getScaleValues(scale)).toEqual(domain);
    });

    it('should return ticks for linear scale', () => {
      const scale = scaleLinear()
        .range([0, 10])
        .domain([0, 10]);

      expect(getScaleValues(scale)).toMatchSnapshot();
    });

    it('should apply "timeModifier" for month precision', () => {
      const scale = scaleUtc()
        .range([0, 10])
        .domain([firstDate, lastDate]);

      expect(
        getScaleValues(scale, { type: 'time', precision: 'month' })
      ).toMatchSnapshot();
    });

    it('should apply "timeModifier" for minute precision', () => {
      const scale = scaleUtc()
        .range([0, 10])
        .domain([
          new Date('2020-01-06T15:00:00.000Z'),
          new Date('2020-01-06T15:10:00.000Z'),
        ]);

      expect(
        getScaleValues(scale, { type: 'time', precision: 'minute' })
      ).toMatchSnapshot();
    });

    it('should apply "timeModifier" for week precision', () => {
      const scale = scaleUtc()
        .range([0, 10])
        .domain([
          new Date('2020-01-01T15:00:00.000Z'),
          new Date('2020-01-30T15:00:00.000Z'),
        ]);

      expect(
        getScaleValues(scale, { type: 'time', precision: 'week' })
      ).toMatchSnapshot();
    });

    it('should apply "timeModifier" for year precision', () => {
      const scale = scaleUtc()
        .range([0, 10])
        .domain([
          new Date('2015-01-01T00:00:00.000Z'),
          new Date('2020-06-01T00:00:00.000Z'),
        ]);

      expect(
        getScaleValues(scale, { type: 'time', precision: 'year' })
      ).toMatchSnapshot();
    });

    it('should return ticks for UTC scale without applying time precision', () => {
      const scale = scaleUtc()
        .range([0, 10])
        .domain([firstDate, lastDate]);

      expect(getScaleValues(scale)).toMatchSnapshot();
    });
  });

  describe('getCenterPosition()', () => {
    it('should calculate center position for element in scale', () => {
      const scale = scaleBand()
        .range([0, 120])
        .domain(domain);

      const positionCalculator = getCenterPosition(scale);

      expect(positionCalculator('Sales')).toEqual(20);
      expect(positionCalculator('Marketing')).toEqual(60);
      expect(positionCalculator('E-commerce')).toEqual(100);
    });
  });

  describe('calculateColorScale()', () => {
    describe('colorMode === shades', () => {
      it('should return specific colors for 3 provided colors', () => {
        const color = calculateColorScale(0, 20, ['yellow', 'green', 'red']);

        expect(color(0)).toEqual('rgb(255, 255, 0)');
        expect(color(20)).toEqual('rgb(255, 0, 0)');
        expect(color(10)).toEqual('rgb(0, 128, 0)');
      });
      it('should return specific colors for 2 provided colors', () => {
        const color = calculateColorScale(0, 20, ['white', 'black']);

        expect(color(0)).toEqual('rgb(255, 255, 255)');
        expect(color(20)).toEqual('rgb(0, 0, 0)');
        expect(color(10)).toEqual('rgb(128, 128, 128)');
      });

      it('should return specific colors for 1 provided colors', () => {
        const color = calculateColorScale(0, 20, ['green']);

        expect(color(0)).toEqual('rgb(255, 255, 255)');
        expect(color(20)).toEqual('rgb(0, 128, 0)');
        expect(color(10)).toEqual('rgb(128, 192, 128)');
      });

      it('should return specific colors for 0 provided colors', () => {
        const color = calculateColorScale(0, 20);

        expect(color(0)).toEqual('rgb(255, 255, 255)');
        expect(color(20)).toEqual('rgb(133, 180, 195)');
        expect(color(10)).toEqual('rgb(194, 218, 225)');
      });
    });
    describe('colorMode === steps', () => {
      it('should return specific colors for 3 provided colors', () => {
        const color = calculateColorScale(
          0,
          20,
          ['yellow', 'green', 'red'],
          'steps'
        );

        expect(color(0)).toEqual('yellow');
        expect(color(20)).toEqual('red');
        expect(color(10)).toEqual('green');
      });
      it('should return specific colors for 2 provided colors', () => {
        const color = calculateColorScale(0, 20, ['white', 'black'], 'steps');

        expect(color(0)).toEqual('white');
        expect(color(20)).toEqual('black');
        expect(color(10)).toEqual('white');
      });

      it('should return specific colors for 1 provided colors', () => {
        const color = calculateColorScale(0, 20, ['green'], 'steps');

        expect(color(0)).toEqual('rgb(255, 255, 255)');
        expect(color(20)).toEqual('rgb(0, 128, 0)');
        expect(color(10)).toEqual('rgb(128, 192, 128)');
      });

      it('should return specific colors for 0 provided colors', () => {
        const color = calculateColorScale(0, 20, [], 'steps');

        expect(color(0)).toEqual('rgb(255, 255, 255)');
        expect(color(20)).toEqual('rgb(133, 180, 195)');
        expect(color(10)).toEqual('rgb(194, 218, 225)');
      });
    });
  });
});
