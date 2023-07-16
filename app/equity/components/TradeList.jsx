'use client';

import { useState } from 'react';
import { Checkbox, Button, DatePicker, Select, Divider, Space } from 'antd';
import { handleGetRevenueData, onSelectDateChange } from '../hooks';
import dayjs from 'dayjs';
import styles from '../index.module.scss';

const { RangePicker } = DatePicker;
const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

export default function TradeList(props) {
  const {
    tradeList = [],
    setRevenueData,
    longSymbol,
    shortSymbol,
    setLongSymbol,
    setShortSymbol,
  } = props;
  const [kLineType, setKLineTypeOption] = useState('1h');

  // 回测配置项
  const [selectDate, setSelectDate] = useState({
    startDate: '2023-01-01',
    endDate: '2023-06-01',
  });
  const params = {
    kLineType,
    longSymbol,
    shortSymbol,
    ...selectDate,
  };

  const onChange = (e, type) => {
    console.log('37,', e, type);
    if (type == 'long') {
      setLongSymbol(e);
    }
    if (type == 'short') {
      setShortSymbol(e);
    }
  };

  let option = [];
  tradeList.map((item) => {
    option.push({
      label: item,
      value: item,
    });
  });
  console.log('57', option);

  const kLineTypeOption = [
    { value: '1h', label: '1h' },
    { value: '2h', label: '2h' },
    { value: '4h', label: '4h' },
  ];

  return tradeList.length > 0 ? (
    <div className={styles.trade}>
      <div className={styles.trade_config}>
        <div className={styles.trade_config_item}>
          <span>回测时间：</span>
          <RangePicker
            defaultValue={[
              dayjs('2023-01-01', dateFormat),
              dayjs('2023-06-01', dateFormat),
            ]}
            onChange={(dates, dateStrings) =>
              onSelectDateChange(dates, dateStrings, setSelectDate)
            }
          />
        </div>

        <div className={styles.trade_config_item}>
          <span>K线类型：</span>
          <Select
            defaultValue='1h'
            style={{ width: 112, marginLeft: 6 }}
            onChange={(e) => setKLineTypeOption(e)}
            options={kLineTypeOption}
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
      <div className={styles.trade_select}>
        <div className={styles.trade_select_item}>
          <span>做多币种：</span>
          <Select
            showSearch={true}
            style={{ width: 140 }}
            defaultValue={[longSymbol]}
            onChange={(e) => onChange(e, 'long')}
            optionLabelProp='label'
          >
            {option.map((item) => {
              return (
                <Option
                  key={`${item.value}`}
                  value={item.value}
                  label={item.label}
                >
                  {item.label}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className={styles.trade_select_item}>
          <span>做空币种：</span>
          <Select
            showSearch={true}
            style={{ width: 140 }}
            defaultValue={[shortSymbol]}
            onChange={(e) => onChange(e, 'short')}
            optionLabelProp='label'
          >
            {option.map((item) => {
              return (
                <Option
                  key={`${item.value}`}
                  value={item.value}
                  label={item.label}
                >
                  {item.label}
                </Option>
              );
            })}
          </Select>
        </div>
      </div>
    </div>
  ) : null;
}
