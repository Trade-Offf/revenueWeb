'use client';
import { Tag } from 'antd';
import styles from '../index.module.scss';

export default function TradeList(props) {
  const { currentTradeString } = props;
  const currentTradeList = currentTradeString?.split(',');
  console.log('8', currentTradeList);

  return (
    <div className={styles.current}>
      <span>做空指标:</span>
      <Tag className={styles.tag}>{currentTradeList[1]}</Tag>
      <span>做多指标:</span>
      <Tag className={styles.tag}>{currentTradeList[0]}</Tag>
    </div>
  );
}
