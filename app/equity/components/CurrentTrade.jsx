'use client';
import { Tag } from 'antd';
import styles from '../index.module.scss';

export default function TradeList(props) {
  const { longSymbol, shortSymbol } = props;

  return (
    <div className={styles.current}>
      <span>做多指标:</span>
      <Tag className={styles.tag}>{longSymbol}</Tag>
      <span>做空指标:</span>
      <Tag className={styles.tag}>{shortSymbol}</Tag>
    </div>
  );
}
