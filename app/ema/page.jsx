'use client';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Container } from '@/components';
import { RightCircleOutlined } from '@ant-design/icons';
import { initGetTradeList, getRenevueList } from '@/pages/api/revenue';
import TradeList from './TradeList';
import EmaChart from './EmaChart';

import styles from './index.module.scss';

const Ema = () => {
  const [revenueData, setRevenueData] = useState({});
  const [tradeList, setTradeList] = useState([]);
  const [selectDate, setSelectDate] = useState({
    startDate: '2023-01-01',
    endDate: '2023-06-01',
  });
  const [isConfigType, setIsConfigType] = useState(false);
  const [txPairs, setTxPairs] = useState('BTC-USDT');
  const myTitle = 'EMA策略';
  const myIconText = '趋势行情适用';

  console.log(tradeList);

  const params = {
    txPairs,
    ...selectDate,
  };

  const onClickhandleConfigType = (type) => {
    setIsConfigType(!isConfigType);
  };

  const onBtnClick = () => {
    console.log('params', params);
    getRenevueList(params).then((res) => {
      setRevenueData(res);
    });
  };

  useEffect(() => {
    initGetTradeList()
      .then((res) => {
        setTradeList(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getRenevueList(params).then((res) => {
      setRevenueData(res);
    });
  }, []);
  return (
    <Container>
      {/* 策略标题 */}
      <section className={styles.title}>
        <div className={styles.text}>{myTitle}</div>
        <div className={styles.icon}>{myIconText}</div>
      </section>

      {/* 容器内容 */}
      <section className={styles.wrap}>
        {/* 策略介绍与回测配置 */}
        <div className={styles.wrap_left}>
          <div className={styles.chart}>
            <EmaChart revenueData={revenueData} tradeList={tradeList} />
          </div>
          <div className={styles.under}>
            {isConfigType === false ? (
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
                <Button
                  type='primary'
                  className={styles.btn}
                  onClick={onBtnClick}
                >
                  开始回测
                </Button>
                <TradeList
                  tradeList={tradeList}
                  txPairs={txPairs}
                  setTxPairs={setTxPairs}
                />
              </div>
            )}
            <RightCircleOutlined
              className={styles.next_Icon}
              style={{ fontSize: '32px' }}
              onClick={onClickhandleConfigType}
            />
          </div>
        </div>

        {/* 数据详情 */}
        <div className={styles.wrap_right}>
          <div className={styles.data_box}></div>
        </div>
      </section>
    </Container>
  );
};

export default Ema;
