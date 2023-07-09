function getTradeList(data) {
  const { results } = data;
  let tradeList = [];
  results?.map((item) => {
    tradeList.push(item.symbol);
  });
  return tradeList;
}

// 获取图表数据，每个交易对和拟合总收益率
function getChartDate(data) {
  const { results, totalRevenue } = data;
  let transactionLists = [];
  let totalRevenueList = [];

  results?.map((item) => {
    transactionLists.push({ name: item.symbol, revenueList: item.revenueList });
  });
  totalRevenueList.push({ name: 'Total', revenueList: totalRevenue });
  return { transactionLists, totalRevenueList };
}

// 获取数据的x轴和y轴
function getXYData(chartList) {
  let xAxisDateList = [];
  let seriesList = [];
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
