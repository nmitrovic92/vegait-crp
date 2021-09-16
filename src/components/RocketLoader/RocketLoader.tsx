import React from 'react';
import { ReactComponent as RocketLoading } from '../../assets/images/launch.svg';
import styles from './RocketLoader.module.css';
import { useEffect, useState } from 'react';

const RocketLoader = () => {
  const [isDarkTheme, setIsTheme] = useState<boolean>(false);

  useEffect(() => {
    for (let i = 0; i < 10_000_000; i++) {
      setIsTheme(!isDarkTheme);
    }
  }, []);

  return (
    <div className={`${styles.pulse} ${styles.rocketLoader}`} style={{ backgroundColor: isDarkTheme ? '#3366ff' : 'whitesmoke' }}>
      <RocketLoading width="100" height="100" />
    </div>
  );
};

export default RocketLoader;
