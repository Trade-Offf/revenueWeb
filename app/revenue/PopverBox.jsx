'use client';
import { Button, Popover, Checkbox } from 'antd';
import styles from './index.module.scss';

export default function PopverBox(props) {
  const { tradeList = [], txPairs, setTxPairs } = props;
  const text = <span>勾选需要展示的回测指标</span>;

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

  const popoverContent = (
    <Checkbox.Group
      defaultValue={[txPairs]}
      options={option}
      onChange={onChange}
    />
  );

  return tradeList.length > 0 ? (
    <Popover
      placement='bottomRight'
      title={text}
      content={popoverContent}
      trigger='click'
    >
      <Button className={styles.btn}>选择指标</Button>
    </Popover>
  ) : null;
}
