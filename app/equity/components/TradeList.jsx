'use client';

import { useState } from 'react';
import { Checkbox, Button, DatePicker, Select, Divider } from 'antd';
import { handleGetRevenueData, onSelectDateChange } from '../hooks';
import dayjs from 'dayjs';
import styles from '../index.module.scss';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

export default function TradeList(props) {
  const {
    tradeList = [],
    setRevenueData,
    currentTradeString,
    setCurrentTradeString,
  } = props;
  const [kLineType, setKLineTypeOption] = useState('1h');
  // const [isSelectTrade, setIsSelectTrade] = useState(false);

  // 回测配置项
  const [selectDate, setSelectDate] = useState({
    startDate: '2023-01-01',
    endDate: '2023-06-01',
  });
  const params = {
    kLineType,
    ...selectDate,
  };

  const onChange = (e) => {
    console.log('33', e);
    if (e.length > 2) {
      console.log('别选了');
    } else {
      let tradeString = '';
      e.map((item) => {
        if (e.indexOf(item) === e.length - 1) {
          tradeString += item;
          return;
        }
        tradeString += item + ',';
      });
      setCurrentTradeString(tradeString);
    }
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

  return tradeList.length > 0 ? (
    <div className={styles.trade}>
      <div className={styles.trade_config}>
        <RangePicker
          defaultValue={[
            dayjs('2023-01-01', dateFormat),
            dayjs('2023-06-01', dateFormat),
          ]}
          onChange={(dates, dateStrings) =>
            onSelectDateChange(dates, dateStrings, setSelectDate)
          }
        />
        <Divider type='vertical' />
        <Select
          defaultValue='1h'
          style={{ width: 120, marginLeft: 16 }}
          onChange={(e) => setKLineTypeOption(e)}
          options={kLineTypeOption}
          fieldNames={{ label: 'k线类型' }}
        />
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
        options={option}
        onChange={onChange}
        defaultValue={[...currentTradeString.split(',')]}
        // disabled={!isSelectTrade}
      />
    </div>
  ) : null;
}
