import styles from './page.module.scss';
import { Container } from '../components';

export default function Home() {
  return (
    <Container>
      <section className={styles.main}>
        <h1 className={styles.title}>
          <div className={styles.gradient}>QuantMaster</div>
          <div>Web3量化交易服务平台</div>
        </h1>
        <p className={styles.subtitle}>
          让Web3投资者无门槛使用量化交易获得成功
        </p>
        <div className={styles.btn_group}>
          <button className={`${styles.btn} ${styles.start_btn}`}>
            开始使用
          </button>
          <button className={styles.btn}>联系我们</button>
        </div>

        <section className={styles.card_list}>
          <div className={styles.card}>
            <h2 className={styles.card_title}>超级交易策略</h2>
            <p className={styles.card_content}>
              专业Web3量化交易者提供高营收低风险策略供选择
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.card_title}>专业交易回测</h2>
            <p className={styles.card_content}>可微调策略查看收益和风险</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.card_title}>自动交易工具</h2>
            <p className={styles.card_content}>
              接入交易所自动运行策略，无需手动操作
            </p>
          </div>
        </section>
      </section>
    </Container>
  );
}
