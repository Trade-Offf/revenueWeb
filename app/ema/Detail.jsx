'use client';
// import { Checkbox, Tag } from 'antd';
import styles from './index.module.scss';

export default function Detail(props) {
  const {} = props;

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

  return (
    <div className={styles.detail}>
      <div className={styles.detail_title}>风险分析</div>
      <table>
        {mockData.map((item) => {
          return (
            <tr key={item.name + item.value} className={styles.detail_content}>
              <td className={`${styles.item} ${styles.name}`}>{item.name}</td>
              <td className={`${styles.item} ${styles.value}`}>{item.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
