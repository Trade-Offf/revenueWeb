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
    { name: '策略年化收益率', value: annualizedReturn, key: '策略年化收益率' },
    { name: '最大回撒', value: maximumDrawdown, key: '最大回撒' },
    { name: '盈利次数', value: numOfProfits, key: '盈利次数' },
    { name: '亏损次数', value: numOfLosses, key: '亏损次数' },
    { name: '胜率', value: winRate, key: '胜率' },
    { name: '盈亏比', value: profitLossRatio, key: '盈亏比' },
    { name: '夏普率', value: sharpeRatio, key: '夏普率' },
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
        rowClassName={(record, index) =>
          index % 2 === 0 ? styles.light_row : styles.dark_row
        }
        columns={columns}
        bordered
        pagination={false}
        size={'middle'}
      />
    </div>
  );
}
