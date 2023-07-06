'use client';

import ReactECharts from 'echarts-for-react';
import { getXYData, getChartDate } from '@/utils';

const Chart = (props) => {
  const { revenueData, tradeList } = props;

  let chartList = getChartDate(revenueData);
  const { xAxisDateList, seriesList } = getXYData(chartList || []);

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '80px',
      right: '80px',
      top: '10%',
      bottom: '5%',
      containLabel: true,
    },
    legend: {
      data: [...tradeList],
    },
    xAxis: {
      type: 'category',
      data: xAxisDateList,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
      },
    },
    series: seriesList,
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: '100%' }}
    />
  );
};

export default Chart;
