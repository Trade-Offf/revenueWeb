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
  const {
    startDate,
    endDate,
    longSymbol,
    shortSymbol,
    kLineType,
    stopProfit,
    stopLoss,
  } = params;

  const response = await request.post(
    '/quant/delatHedging',
    qs.stringify({
      kLineType: kLineType,
      startDate: startDate,
      endDate: endDate,
      takeProfit: stopProfit,
      stopLoss: stopLoss,
      longSymbol: longSymbol,
      shortSymbol: shortSymbol,
    })
  );
  if (response.code === 200) {
    return response?.result;
  }
}

export { initTradeList, getRevenueData };
