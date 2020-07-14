/* eslint-disable react-hooks/rules-of-hooks, @typescript-eslint/camelcase */
import * as React from 'react';
import KeenAnalysis from 'keen-analysis';

import KeenDataViz from '../visualizer';

export default {
  title: 'Visualizations|Errors',
  parameters: {
    componentSubtitle: 'Dataviz error handler component',
  },
};

const analysisConfig = {
  projectId: '5c87b64ec9e77c0001cf5b6e',
  readKey: 'FB952962910C97DE3E1C6A25EB2FC6B22FDB1ACA9D572948EA18227287BC4E12',
};

export const simple = () => {
  const container = React.useRef(null);

  React.useEffect(() => {
    const client = new KeenAnalysis(analysisConfig);
    const dataviz = new KeenDataViz({
      type: 'funnel',
      container: container.current,
      mappings: {
        pageviews: 'Views',
        signups: 'Signups',
        purchases: 'Purchsases',
      },
      widget: {
        title: {
          content: 'Last month results',
        },
      },
    });

    client
      .query({
        analysis_type: 'count',
        steps: [],
      })
      .then(res => dataviz.render(res))
      .catch(err => {
        console.log(err, 'lalal');
        dataviz.error(err.body);
      });
  }, []);

  return <div style={{ width: '600px', height: '400px' }} ref={container} />;
};
