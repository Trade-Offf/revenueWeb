import request from '@/service/fetch';
import qs from 'qs';

// 初始化交易对列表
async function initTradeList() {
  const response = await request.post('/quant/listTxPairs', {
    kLineType: '1h',
  });
  if (response.code === 200) {
    return response?.result;
  }
}

async function getRevenueData(params) {
  const { txPairs, startDate, endDate } = params;
  const response = await request.post(
    '/quant/ema',
    qs.stringify({
      txPairs: txPairs,
      kLineType: '1h',
      startDate: startDate,
      endDate: endDate,
      shortEma: 5,
      longEma: 20,
      filterRevenueRate: 0,
    })
  );
  if (response.code === 200) {
    return response?.result;
  }
}

export { initTradeList, getRevenueData };
