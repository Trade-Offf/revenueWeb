'use client';
import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import styles from './index.module.scss';
export const Container = ({
  as: Element = 'div',
  children,
  className,
  ...rest
}) => {
  return (
    <ConfigProvider locale={zhCN}>
      <Element {...rest} className={styles.container}>
        {children}
      </Element>
    </ConfigProvider>
  );
};
