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
  const { startDate, endDate, longSymbol, shortSymbol,kLineType } = params;

  const response = await request.post(
    '/quant/delatHedging',
    qs.stringify({
      kLineType: kLineType,
      startDate: startDate,
      endDate: endDate,
      takeProfit: 0.05,
      stopLoss: 0.05,
      longSymbol: longSymbol,
      shortSymbol: shortSymbol,
    })
  );
  if (response.code === 200) {
    return response?.result;
  }
}

export { initTradeList, getRevenueData };
