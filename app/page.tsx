'use client';
import { Footer } from '@/components/footer/Footer';
import * as styles from './index.css';
import Header from '@/components/Header/Header';
import { useState } from 'react';
import { Main } from '@/features/home';

export default function Home() {
  const [onMenu, setOnMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
