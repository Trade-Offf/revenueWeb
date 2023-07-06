function getTradeList(data) {
  const { results } = data;
  let tradeList = [];
  results?.map((item) => {
    tradeList.push(item.symbol);
  });
  return tradeList;
}

function getChartDate(data) {
  const { results, totalRevenue } = data;
  let chartList = [];
  results?.map((item) => {
    chartList.push({ name: item.symbol, revenueList: item.revenueList });
  });
  chartList.push({ name: 'Total', revenueList: totalRevenue });
  return chartList;
}

function getXYData(chartList) {
  let xAxisDateList = [];
  let seriesList = [];
  // TODO 总线和单线的单线数据结构不一样，需要统一（改用两个函数处理）
  chartList[0]?.revenueList?.map((item) => {
    const month = item?.date.substring(4, 6);
    const day = item?.date.substring(6, 8);
    xAxisDateList.push(`${month}-${day}`);
  });
  chartList?.map((item) => {
    const { revenueList } = item;
    let yAxisDateList = [];

    revenueList?.map((item) => {
      yAxisDateList.push((Number(item.revenueRate) * 100).toFixed(3));
    });
    seriesList.push({
      name: item.name,
      type: 'line',
      data: yAxisDateList,
    });
  });

  return { xAxisDateList, seriesList };
}

export { getTradeList, getChartDate, getXYData };
