// 'use client';
// import { DatePicker, Button } from 'antd';
// import { useState, useEffect } from 'react';
// import dayjs from 'dayjs';
// import Chart from './Chart';
// import PopverBox from './PopverBox';
// import { Container } from '@/components';
// import { initGetTradeList, getRenevueList } from '@/pages/api/revenue';
// import styles from './index.module.scss';
// const { RangePicker } = DatePicker;

// const dateFormat = 'YYYY-MM-DD';

// const Revenue = () => {
//   const [tradeList, setTradeList] = useState([]);
//   const [revenueData, setRevenueData] = useState({});
//   const [selectDate, setSelectDate] = useState({
//     startDate: '2023-01-01',
//     endDate: '2023-06-01',
//   });
//   const [txPairs, setTxPairs] = useState('BTC-USDT');

//   const params = {
//     txPairs,
//     ...selectDate,
//   };

//   useEffect(() => {
//     initGetTradeList()
//       .then((res) => {
//         setTradeList(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     getRenevueList(params).then((res) => {
//       setRevenueData(res);
//     });
//   }, []);

//   const onRangeChange = (dates, dateStrings) => {
//     if (dates) {
//       setSelectDate({
//         startDate: dateStrings[0],
//         endDate: dateStrings[1],
//       });
//     } else {
//       setSelectDate({
//         startDate: '',
//         endDate: '',
//       });
//     }
//   };

//   const onBtnClick = () => {
//     console.log('params', params);
//     getRenevueList(params).then((res) => {
//       setRevenueData(res);
//     });
//   };

//   return (
//     <Container>
//       <section className={styles.title}>
//         <h2 className={styles.text}>ema数据回测</h2>

//         <div className={styles.right_box}>
//           <RangePicker
//             defaultValue={[
//               dayjs('2023-01-01', dateFormat),
//               dayjs('2023-06-01', dateFormat),
//             ]}
//             onChange={onRangeChange}
//           />
//           <PopverBox
//             tradeList={tradeList}
//             txPairs={txPairs}
//             setTxPairs={setTxPairs}
//           />
//           <Button type='primary' className={styles.btn} onClick={onBtnClick}>
//             开始回测
//           </Button>
//         </div>
//       </section>
//       <section className={styles.content}>
//         <Chart revenueData={revenueData} tradeList={tradeList} />
//       </section>
//     </Container>
//   );
// };

// export default Revenue;
