'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components';
import { RightCircleOutlined } from '@ant-design/icons';
import {
  EquityChart,
  TradeList,
  DetailTable,
  CurrentTrade,
} from './components';
import {
  handleGetRevenueData,
  handleInitTradeList,
  onSelectDateChange,
} from './hooks';
import styles from './index.module.scss';

const Equity = () => {
  const [revenueData, setRevenueData] = useState({}); // 回测数据
  const [isShowConfigPage, setIsShowConfigPage] = useState(false); // 是否展示配置模块
  const [tradeList, setTradeList] = useState([]); // 所有交易对列表
  const [currentTradeString, setCurrentTradeString] = useState('BTC-USDT'); // 交易对字符串

  // 页面常量
  const emaTitle = '中性策略';
  const emaIconText = '震荡行情适用';

  useEffect(() => {
    handleInitTradeList(setTradeList);
    handleGetRevenueData(
      {
        kLineType: '1h',
        currentTradeString: 'BTC-USDT',
        startDate: '2023-01-01',
        endDate: '2023-06-01',
      },
      setRevenueData
    );
  }, []);

  return (
    <Container>
      {/* 策略标题 */}
      <section className={styles.title}>
        <div className={styles.text}>{emaTitle}</div>
        <div className={styles.icon}>{emaIconText}</div>
        <CurrentTrade currentTradeString={currentTradeString} />
      </section>

      {/* 容器内容 */}
      <section className={styles.wrap}>
        <div className={styles.wrap_left}>
          {/* 回测图表 */}
          <div className={styles.chart}>
            <EquityChart revenueData={revenueData} tradeList={tradeList} />
          </div>

          {/* 策略介绍与回测配置 */}
          <div className={styles.under}>
            {isShowConfigPage === false ? (
              <div className={styles.description}>
                <div className={styles.box}>
                  <div className={styles.box_title}>策略思想</div>
                  <div className={styles.box_content}>
                    做多价值币，做空垃圾币，是一个长赢策略
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.box_title}>执行逻辑</div>
                  <div
                    className={styles.box_content}
                  >{`选币：做多ETHUSDT，做空APEUSDT\n交易时机：以50美元为单位，共100个单位，每个对冲交易对下跌10%时，买入2x50美金；每个对冲交易对上涨10%时，平仓提取利润，重新建仓`}</div>
                </div>
              </div>
            ) : (
              <div className={styles.config}>
                <TradeList
                  tradeList={tradeList}
                  currentTradeString={currentTradeString}
                  setCurrentTradeString={setCurrentTradeString}
                  setRevenueData={setRevenueData}
                />
              </div>
            )}
            <RightCircleOutlined
              className={styles.next_Icon}
              style={{ fontSize: '32px' }}
              onClick={() => setIsShowConfigPage(!isShowConfigPage)}
            />
          </div>
        </div>

        {/* 数据详情 */}
        <div className={styles.wrap_right}>
          <div className={styles.data_box}>
            <DetailTable />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Equity;
