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

// 获取图表数据
function getChartDate(data) {
  const { totalRevenue, hodlRevenueList } = data;
  let totalRevenueList = [];
  let holdRevenueList = [];

  for (let key in hodlRevenueList) {
    holdRevenueList.push({ name: key, revenueList: hodlRevenueList[key] });
  }
  totalRevenueList.push({ name: 'Total', revenueList: totalRevenue });
  return { totalRevenueList, holdRevenueList };
}

// 获取数据的 x 轴和 y 轴
function getXYData(chartList) {
  let xAxisDateList = [];
  let yAxisDateList = [];

  chartList?.revenueList?.map((item) => {
    const year = item?.date.substring(0, 4);
    const month = item?.date.substring(4, 6);
    const day = item?.date.substring(6, 8);
    xAxisDateList.push(`${year}-${month}-${day}`);
    yAxisDateList.push((Number(item.revenueRate) * 100).toFixed(3));
  });

  return { xAxisDateList, yAxisDateList };
}

// 首字母分类配置项
function groupByFirstLetter(strings) {
  const data = {};
  for (let i = 0; i < strings.length; i++) {
    const str = strings[i];
    const firstLetter = str.charAt(0).toUpperCase();
    if (!data[firstLetter]) {
      data[firstLetter] = [];
    }
    data[firstLetter].push(str);
  }
  return data;
}

export {
  getTradeList,
  clearTradeList,
  groupByFirstLetter,
  getChartDate,
  getXYData,
};
