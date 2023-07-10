'use client';

import ReactECharts from 'echarts-for-react';
import { getXYData, getChartDate } from '@/utils';

const EmaChart = (props) => {
  const { revenueData } = props;

  let { totalRevenueList = [] } = getChartDate(revenueData);
  const { xAxisDateList, seriesList } = getXYData(totalRevenueList);

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '30px',
      right: '30px',
      top: '5%',
      bottom: '5%',
      containLabel: true,
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

  return <ReactECharts option={option} style={{ height: '100%' }} />;
};

export default EmaChart;
