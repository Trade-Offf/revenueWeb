function getTradeList(data) {
  const { results } = data;
  let tradeList = [];
  results?.map((item) => {
    tradeList.push(item.symbol);
  });
  return tradeList;
}

// 过滤有冒号的重复数据
// TODO：跟后端沟通，返回数据格式统一，不要有重复
function clearTradeList(list) {
  let newTradeList = [];

  list.map((item) => {
    if (item?.key.indexOf(':') == -1) {
      newTradeList.push(item?.key);
    }
  });

  newTradeList.sort();
  return newTradeList;
}

// 获取每个交易对和拟合总收益率数据
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

// 获取数据的 x 轴和 y 轴
function getXYData(chartList) {
  let xAxisDateList = [];
  let seriesList = [];

  chartList[0]?.revenueList?.map((item) => {
    const month = item?.date.substring(4, 6);
    const day = item?.date.substring(6, 8);
    xAxisDateList.push(`${month}-${day}`);
  });

  chartList.map((item) => {
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

export { getTradeList, clearTradeList, getChartDate, getXYData };
