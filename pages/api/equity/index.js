import request from '@/service/fetch';
import qs from 'qs';

('http://43.133.186.198:7001/quant/delatHedging?kLineType=1h&&takeProfit=0.05&stopLoss=0.05&longSymbol=ETH-USDT&shortSymbol=FLOW-USDT');
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
  const { currentTradeString='', startDate, endDate } = params;
  let list = currentTradeString.split(',');

  console.log('19',list);
  const response = await request.post(
    '/quant/delatHedging',
    qs.stringify({
      kLineType: '1h',
      startDate: startDate,
      endDate: endDate,
      takeProfit: 0.05,
      stopLoss: 0.05,
      longSymbol: list[0],
      shortSymbol: list[1],
    })
  );
  if (response.code === 200) {
    return response?.result;
  }
}

export { initTradeList, getRevenueData };
