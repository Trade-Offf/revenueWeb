'use client';
import { Tag } from 'antd';
import styles from '../index.module.scss';

export default function TradeList(props) {
  const { currentTradeString } = props;
  const currentTradeList = currentTradeString?.split(',');

  return (
    <div className={styles.current}>
      <span>当前回测指标:</span>
      <span className={styles.tags}>
        {currentTradeList.map((item, index) => {
          return (
            <Tag key={`${item.key}_${index}`} className={styles.tag}>
              {item}
            </Tag>
          );
        })}
      </span>
    </div>
  );
}
