import * as styles from './Category.css';
import { Name } from '@/components/name/Name';
import { Circle } from '@/components/name/Circle';

export const SelfInfo = () => {
  return (
    <div className={styles.selfInfo}>
      <div className={styles.nameBox}>
        <Name />
        <Circle />
      </div>
      <p className={styles.selfInfoText}>
        A minimalist and aesthetics enthusiast who gladly shares their life and
        healthy lifestyle — inspiring others to take action and achieve success
        in life.
      </p>
    </div>
  );
};
