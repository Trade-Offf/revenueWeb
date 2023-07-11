'use client';
import { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import styles from './index.module.scss';

export default function Detail(props) {
  const {} = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const mockData = [
    { name: '累积净值', value: 1 },
    { name: '年化收益', value: 1 },
    { name: '最大回撒', value: 1 },
    { name: '最大回撤开始时间', value: 1 },
    { name: '最大回撤结束时间', value: 1 },
    { name: '年化收益/回撤比', value: 1 },
    { name: '盈利次数', value: 1 },
    { name: '亏损次数', value: 1 },
    { name: '每笔交易平均盈亏', value: 1 },
    { name: '单笔最大盈利', value: 1 },
    { name: '单笔最大亏损', value: 1 },
    { name: '胜率', value: 1 },
    { name: '盈亏比', value: 1 },
    { name: '资金使用率_平均值', value: 1 },
    { name: '资金使用率_ 25分位', value: 1 },
    { name: '资金使用率_50分位', value: 1 },
    { name: '资金使用率_75分位', value: 1 },
    { name: '年化收益/资金占用', value: 1 },
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
      <Table dataSource={mockData} columns={columns} bordered pagination={false} size={'small'} />
    </div>
  );
}
