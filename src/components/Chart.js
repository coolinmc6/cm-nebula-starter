import React, { useEffect, useRef, useState } from 'react';
import nAppPromise from '../config/nApp';

const Chart = ({ type, properties }) => { // eslint-disable-line
  const chartRef = useRef(null);
  const [app, setApp] = useState(null);

  // Load the app on Component render
  useEffect(() => {
    (async () => {
      const _app = await nAppPromise();
      setApp(_app);
    })()
  }, [])

  // Render the chart when app has been updated
  useEffect(() => {
    if(app) {
      app.render({
        element: chartRef.current,
        type,
        properties,
      })
    }
  }, [app])

  return (
    <div ref={chartRef} style={{ width: 800, height: 400 }} />
  );
};

export default Chart;
