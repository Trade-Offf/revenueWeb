import request from '@/service/fetch';
import qs from 'qs';
// 初始化交易对列表

async function initGetTradeList() {
  const response = await request.post('quant/listTxPairs', {
    kLineType: '1h',
  });
  if (response.code === 200) {
    return response?.result;
  }
}

async function getRenevueList() {
  const response = await request.post(
    '/quant/ema',
    qs.stringify({
      txPairs: 'BTC-USDT,ETH-USDT',
      kLineType: '1h',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      shortEma: 5,
      longEma: 20,
      filterRevenueRate: 0,
    })
  );
  if (response.code === 200) {
    return response?.result;
  }
}

export { initGetTradeList, getRenevueList };
