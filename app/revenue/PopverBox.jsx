'use client';
import { Button, Popover, Checkbox } from 'antd';
import styles from './index.module.scss';

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export default function PopverBox(props) {
  const { tradeList = [] } = props;
  const text = <span>勾选需要展示的回测指标</span>;

  const popoverContent = (
    <div>
      {tradeList.map((item) => {
        return <Checkbox key={item?.key}>{item?.value}</Checkbox>;
      })}
    </div>
  );

  return tradeList.length > 0 ? (
    <Popover
      placement="bottomRight"
      title={text}
      content={popoverContent}
      trigger="click"
    >
      <Button className={styles.btn}>选择指标</Button>
    </Popover>
  ) : null;
}
