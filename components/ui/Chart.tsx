import { createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

function Chart({ series }) {
  const chartContainerRef = useRef<any>();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      rightPriceScale: {
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
      },
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addCandlestickSeries();
    // for (let i = 0; i < series.length; i++) {
    //     series[i].time = `${series[i].time.year}-${series[i].time.month}-${series[i].time.day}`;
    // }
    newSeries.setData(series);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [series]);

  return <div ref={chartContainerRef} className="my-5" />;
}

export default Chart;
