'use client';

import { useState } from 'react';
import { Button, DatePicker, Select } from 'antd';
import { handleGetRevenueData, onSelectDateChange } from '../hooks';
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
    selectDate,
    setSelectDate,
  } = props;
  const [kLineType, setKLineTypeOption] = useState('1h');
  const [stopProfit, setStopProfit] = useState('0.05');
  const [stopLoss, setStopLoss] = useState('0.05');
  const { startDate, endDate } = selectDate;

  const params = {
    kLineType,
    longSymbol,
    shortSymbol,
    stopProfit,
    stopLoss,
    startDate: startDate.format(dateFormat),
    endDate: endDate.format(dateFormat),
  };

  const onChange = (e, type) => {
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
  // k线类型
  const kLineTypeOption = [
    { value: '1h', label: '1h' },
    { value: '2h', label: '2h' },
    { value: '4h', label: '4h' },
  ];
  // 止盈百分比
  const stopProfitOption = [
    { value: '0.05', label: '5%' },
    { value: '0.1', label: '10%' },
  ];
  // 止损百分比
  const stopLossOption = [
    { value: '0.05', label: '5%' },
    { value: '0.1', label: '10%' },
  ];

  return tradeList.length > 0 ? (
    <div className={styles.trade}>
      <div className={styles.trade_config}>
        <div className={styles.trade_config_item}>
          <span>回测时间：</span>
          <RangePicker
            defaultValue={[startDate, endDate]}
            onChange={(dates) => onSelectDateChange(dates, setSelectDate)}
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
      <div className={styles.trade_config}>
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
      <div className={styles.trade_select}>
        <div className={styles.trade_config_item}>
          <span>止盈比例：</span>
          <Select
            defaultValue={stopProfit}
            style={{ width: 140 }}
            onChange={(e) => setStopProfit(e)}
            options={stopProfitOption}
          />
        </div>
        <div className={styles.trade_config_item}>
          <span>止损比例：</span>
          <Select
            defaultValue={stopLoss}
            style={{ width: 140 }}
            onChange={(e) => setStopLoss(e)}
            options={stopLossOption}
          />
        </div>
      </div>
    </div>
  ) : null;
}
