'use client';
import { Checkbox, Tag } from 'antd';
import styles from './index.module.scss';

export default function TradeList(props) {
  const { tradeList = [], txPairs, setTxPairs } = props;
  const currentTradeList = txPairs?.split(',')

  const onChange = (e) => {
    let tradeString = '';
    e.map((item) => {
      if (e.indexOf(item) === e.length - 1) {
        tradeString += item;
        return;
      }
      tradeString += item + ',';
    });
    setTxPairs(tradeString);
  };

  let option = [];
  tradeList.map((item) => {
    option.push({
      label: item?.key,
      value: item?.value,
    });
  });

  return tradeList.length > 0 ? (
    <div className={styles.trade}>
      <div className={styles.trade_title}>
        <span>当前选择的回测指标:</span>
        <span className={styles.tags}>
          {currentTradeList.map((item) => {
            return <Tag key={item.key} className={styles.tag}>{item}</Tag>;
          })}
        </span>
      </div>
      <Checkbox.Group
        className={styles.tradeList_wrap}
        defaultValue={[txPairs]}
        options={option}
        onChange={onChange}
      />
    </div>
  ) : null;
}
