'use client';
import { useState, useEffect } from 'react';
import { Table } from 'antd';
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
    // profitLossRatio = '',
    sharpeRatio = '',
    winRate = '',
    drawDownStartDate = '',
    drawDownEndDate = '',
    annualizedReturnLossRatio = '',
    aveProfitOrLoss = '',
    singleMaxProfit = '',
  } = strategyAnalyzeResult;

  useEffect(() => {
    setLoading(false);
  }, []);

  const detaliData = [
    { name: '策略年化收益率', value: annualizedReturn, key: '策略年化收益率' },
    { name: '最大回撒', value: maximumDrawdown, key: '最大回撒' },
    {
      name: '年化收益率/最大回撒',
      value: annualizedReturnLossRatio,
      key: '年化收益率/最大回撒',
    },
    { name: '平均交易收益率', value: aveProfitOrLoss, key: '平均交易收益率' },
    {
      name: '单笔交易最大收益率',
      value: singleMaxProfit,
      key: '单笔交易最大收益率',
    },
    { name: '盈利次数', value: numOfProfits, key: '盈利次数' },
    { name: '加仓次数', value: numOfLosses, key: '加仓次数' },

    {
      name: '最大回撒开始时间',
      value: drawDownStartDate,
      key: '最大回撒开始时间',
    },
    {
      name: '最大回撒结束时间',
      value: drawDownEndDate,
      key: '最大回撒结束时间',
    },
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
        size={'small'}
      />
    </div>
  );
}
