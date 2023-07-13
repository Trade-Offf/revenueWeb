import { clearTradeList } from '@/utils';
import { initTradeList, getRevenueData } from '@/pages/api/revenue';

/**
 * 根据入参更新回测数据
 * @param {Object} params
 * @param {Function} setRevenueData 更新回测数据State
 */
function getHandleRevenueList(params, setRevenueData) {
  getRevenueData(params).then((res) => {
    setRevenueData(res);
  });
}

/**
 * 初始化获取交易对
 * @param {Function} setTradeList 更新交易对State
 */
function initHandleGetTradeList(setTradeList) {
  initTradeList()
    .then((res) => {
      let tradeList = clearTradeList(res);
      setTradeList(tradeList);
    })
    .catch((err) => {
      console.log(err);
    });
}

/**
 * 日期选择器回调函数
 * @param {Function} dates  日期
 * @param {Function} dateStrings 日期字符串
 */
function onSelectDateChange(dates, dateStrings, setSelectDate) {
  if (dates) {
    setSelectDate({
      startDate: dateStrings[0],
      endDate: dateStrings[1],
    });
  } else {
    setSelectDate({
      startDate: '',
      endDate: '',
    });
  }
}

export { getHandleRevenueList, initHandleGetTradeList, onSelectDateChange };
