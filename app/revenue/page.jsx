'use client';
import { DatePicker } from 'antd';
import { useState, useEffect } from 'react';
import { Container } from '@/components';
import Chart from './Chart';
import PopverBox from './PopverBox';
import styles from './index.module.scss';
const { RangePicker } = DatePicker;
import { initGetTradeList, getRenevueList } from '@/pages/api/revenue';

const Revenue = () => {
  const [tradeList, setTradeList] = useState([]);
  const [revenueData, setRevenueData] = useState({});

  useEffect(() => {
    initGetTradeList()
      .then((res) => {
        setTradeList(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getRenevueList().then((res) => {
      setRevenueData(res);
    });
  }, []);

  // 选择回测时间范围
  // const onDateChange = (value, dateString) => {
  //   startTime = dateString?.[0];
  //   endTime = dateString?.[1];
  //   console.log('Formatted Selected Time: ', startTime, endTime);
  // };

  return (
    <Container>
      <section className={styles.title}>
        <h2 className={styles.text}>ema数据回测</h2>

        <div className={styles.right_box}>
          <RangePicker />
          <PopverBox tradeList={tradeList} />
        </div>
      </section>
      <section className={styles.content}>
        <Chart revenueData={revenueData} tradeList={tradeList} />
      </section>
    </Container>
  );
};

export default Revenue;
