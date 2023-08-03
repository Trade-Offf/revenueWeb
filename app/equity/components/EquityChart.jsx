'use client';
import ReactECharts from 'echarts-for-react';
import { getXYData, getChartDate } from '@/utils';

const EmaChart = (props) => {
  const { revenueData, longSymbol, shortSymbol } = props;
  const longStr = `${longSymbol}多持`;
  const shortStr = `${shortSymbol}空持`;
  let { totalRevenueList = [], holdRevenueList = [] } =
    getChartDate(revenueData);
  const { xAxisDateList: xTotal, yAxisDateList: yTotal } = getXYData(
    totalRevenueList[0]
  );
  let yLong = [];
  let yShort = [];
  let yBtc = [];

  holdRevenueList.map((item) => {
    if (item.name === longSymbol) {
      const { yAxisDateList } = getXYData(item);
      yLong = yAxisDateList;
    }
    if (item.name === shortSymbol) {
      const { yAxisDateList } = getXYData(item);
      yShort = yAxisDateList;
    }
    if (item.name === 'BTC-USDT') {
      const { yAxisDateList } = getXYData(item);
      yBtc = yAxisDateList;
    }
  });
  const selected = {
    策略线: true,
    BTC长持: true,
    [longStr]: false,
    [shortStr]: false,
  };

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['策略线', 'BTC长持', longStr, shortStr],
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
      data: xTotal,
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
        data: [...yTotal],
      },
      {
        name: 'BTC长持',
        type: 'line',
        data: [...yBtc],
      },
      {
        name: longStr,
        type: 'line',
        data: [...yLong],
      },
      {
        name: shortStr,
        type: 'line',
        data: [...yShort],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
};

export default EmaChart;
