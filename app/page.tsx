'use client';
import * as styles from './index.css';
import Header from '@/components/Header/Header';
import { Body } from '@/features/home/body/Body';
import { useState } from 'react';

export default function Home() {
  const [onMenu, setOnMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Header />
      <Body />
    </div>
  );
}
