import styles from './page.module.scss';
import { Container } from '../components';

export default function Home() {
  return (
    <Container>
      <section className={styles.main}>
        <h1 className={styles.title}>
          <div className={styles.gradient}>超简洁</div>
          <div>QuantMaster 图表</div>
        </h1>
        <p className={styles.subtitle}>
          时效性好，支持多种图表类型，适用于量化策略回测的可视化工具
        </p>
        <div className={styles.btn_group}>
          <button className={`${styles.btn} ${styles.start_btn}`}>
            开始使用
          </button>
          <button className={styles.btn}>更多</button>
        </div>

        <section className={styles.card_list}>
          <div className={styles.card}>
            <h2 className={styles.card_title}>易学易用</h2>
            <p className={styles.card_content}>
              基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
              和一流的文档。
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.card_title}>易学易用</h2>
            <p className={styles.card_content}>
              基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
              和一流的文档。
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.card_title}>易学易用</h2>
            <p className={styles.card_content}>
              基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
              和一流的文档。
            </p>
          </div>
        </section>
      </section>
    </Container>
  );
}
