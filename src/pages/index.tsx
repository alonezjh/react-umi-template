import React from 'react';
import { Empty } from 'antd';
import styles from './index.scss';

export default function() {
  return (
    <div className={styles.content}>
      <Empty />
    </div>
  );
}
