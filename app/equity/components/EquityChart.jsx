'use client';
import ReactECharts from 'echarts-for-react';
import { getXYData, getChartDate } from '@/utils';

const EmaChart = (props) => {
  const { revenueData, longSymbol, shortSymbol } = props;
  const longStr = `${longSymbol}多持`;
  const shortStr = `${shortSymbol}空持`;
  let { totalRevenueList = [] } = getChartDate(revenueData);
  const { xAxisDateList, seriesList } = getXYData(totalRevenueList);
  const selected = {
    策略线: true,
    BTC基线: true,
    [longStr]: false,
    [shortStr]: false,
  };

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['策略线', 'BTC基线', longStr, shortStr],
      selected,
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
    series: [
      {
        name: '策略线',
        type: 'line',
        data: [...seriesList[0].data],
      },
      {
        name: 'BTC基线',
        type: 'line',
        data: [...seriesList[0].data],
      },
      {
        name: longStr,
        type: 'line',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: shortStr,
        type: 'line',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
};

export default EmaChart;
