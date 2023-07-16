'use client';
import { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import styles from '../index.module.scss';

export default function Detail(props) {
  const { revenueData } = props;
  const [loading, setLoading] = useState(true);
  const { strategyAnalyzeResult = {} } = revenueData;

  const {
    annualizedReturn = '',
    maximumDrawdown = '',
    numOfLosses = '',
    numOfProfits = '',
    profitLossRatio = '',
    sharpeRatio = '',
    winRate = '',
  } = strategyAnalyzeResult;

  useEffect(() => {
    setLoading(false);
  }, []);

  const detaliData = [
    { name: '策略年化收益率', value: annualizedReturn },
    { name: '最大回撒', value: maximumDrawdown },
    { name: '盈利次数', value: numOfProfits },
    { name: '亏损次数', value: numOfLosses },
    { name: '胜率', value: winRate },
    { name: '盈亏比', value: profitLossRatio },
    { name: '夏普率', value: sharpeRatio },
  ];

  const columns = [
    {
      title: '指标',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数值',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  return (
    <div className={styles.detail}>
      <div className={styles.detail_title}>风险分析</div>
      <Table
        dataSource={detaliData}
        columns={columns}
        bordered
        pagination={false}
        size={'middle'}
      />
    </div>
  );
}
