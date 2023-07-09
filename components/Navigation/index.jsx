'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navs } from './config';
import styles from './index.module.scss';

export const Navigation = () => {
  const router = usePathname();

  return (
    <div className={styles.navigation}>
      <Link className={styles.logo} href='/'>
        <Image src='/master.png' alt='' width={100} height={56} />
      </Link>
      <div className={styles.nav_list}>
        {navs?.map((item) => {
          return (
            <Link
              key={item.label}
              href={item.path}
              className={
                item.path == router
                  ? styles.nav_list_item_active
                  : styles.nav_list_item
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
