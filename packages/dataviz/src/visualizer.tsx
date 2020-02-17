import ReactDOM from 'react-dom';
import {
  parseQuery,
  createScaleSettings,
  Query,
  AnalysisResult,
} from '@keen.io/parser';

import { renderWidget, Widgets } from './render-widget';
import { validateOptions } from './visualizer.utils';

import { Options, WidgetSettings } from './types';

class Visualizer {
  /** Type of widget that should be rendered */
  private type: Widgets;

  /** Container used to mount widget */
  private container: HTMLElement | string;

  /** General widget settings */
  private widgetSettings?: WidgetSettings;

  constructor(options: Options) {
    validateOptions(options);
    const { container, type, widget } = options;

    this.widgetSettings = widget;
    this.container = container;
    this.type = type;
  }

  render({ query, result }: { query: Query; result: AnalysisResult }) {
    const container =
      this.container instanceof HTMLElement
        ? this.container
        : document.querySelector(this.container);
    const { keys, results } = parseQuery({ query, result });

    ReactDOM.render(
      renderWidget({
        type: this.type,
        widgetSettings: this.widgetSettings,
        data: results,
        scaleSettings: createScaleSettings(query),
        query,
        keys,
      }),
      container
    );
  }
}

export default Visualizer;