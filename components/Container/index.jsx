'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/locale/zh_CN';
import styles from './index.module.scss';
import 'dayjs/locale/zh-cn';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

export const Container = ({
  as: Element = 'div',
  children,
  className,
  ...rest
}) => {
  return (
    <Element {...rest} className={styles.container}>
      <ConfigProvider locale={zh_CN}>{children}</ConfigProvider>
    </Element>
  );
};
