'use client';

import { useState } from 'react';
import { Checkbox, Button, DatePicker, Select, Divider } from 'antd';
import { handleGetRevenueData, onSelectDateChange } from '../hooks';
import styles from '../index.module.scss';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

export default function TradeList(props) {
  const {
    tradeList = [],
    currentTradeString,
    setRevenueData,
    setCurrentTradeString,
    selectDate,
    setSelectDate,
  } = props;
  const [kLineType, setKLineTypeOption] = useState('1h');
  const [shortEma, setShortEma] = useState(5);
  const [longEma, setLongEma] = useState(20);
  const { startDate, endDate } = selectDate;
  console.log('24', startDate);

  const params = {
    shortEma,
    longEma,
    kLineType,
    currentTradeString,
    startDate: startDate.format(dateFormat),
    endDate: endDate.format(dateFormat),
  };

  const onChange = (e) => {
    let tradeString = '';
    e.map((item) => {
      if (e.indexOf(item) === e.length - 1) {
        tradeString += item;
        return;
      }
      tradeString += item + ',';
    });
    setCurrentTradeString(tradeString);
  };

  let option = [];
  tradeList.map((item) => {
    option.push({
      label: item,
      value: item,
    });
  });

  const kLineTypeOption = [
    { value: '1h', label: '1h' },
    { value: '2h', label: '2h' },
    { value: '4h', label: '4h' },
  ];
  const shortEmaOption = [
    { value: '5', label: '5' },
    { value: '7', label: '7' },
    { value: '10', label: '10' },
  ];
  const longEmaOption = [
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '60', label: '60' },
  ];

  return tradeList.length > 0 ? (
    <div className={styles.trade}>
      <div className={styles.trade_config}>
        <div>
          <span>回测时间：</span>
          <RangePicker
            defaultValue={[startDate, endDate]}
            onChange={(dates) => onSelectDateChange(dates, setSelectDate)}
          />
        </div>

        <Divider type='vertical' style={{ margin: '0 16px' }} />
        <div>
          <span>K线类型：</span>
          <Select
            defaultValue='1h'
            style={{ width: 120 }}
            onChange={(e) => setKLineTypeOption(e)}
            options={kLineTypeOption}
          />
        </div>
        <Divider type='vertical' style={{ margin: '0 16px' }} />
        <div>
          <span>短均线：</span>
          <Select
            defaultValue={5}
            style={{ width: 120 }}
            onChange={(e) => setShortEma(e)}
            options={shortEmaOption}
          />
        </div>
        <Divider type='vertical' style={{ margin: '0 16px' }} />
        <div>
          <span>长均线：</span>
          <Select
            defaultValue={20}
            style={{ width: 120 }}
            onChange={(e) => setLongEma(e)}
            options={longEmaOption}
          />
        </div>
        <Button
          type='primary'
          className={styles.btn}
          onClick={() => handleGetRevenueData(params, setRevenueData)}
        >
          开始回测
        </Button>
      </div>
      <Divider />

      <Checkbox.Group
        className={styles.tradeList_wrap}
        defaultValue={[currentTradeString]}
        options={option}
        onChange={onChange}
      />
    </div>
  ) : null;
}
