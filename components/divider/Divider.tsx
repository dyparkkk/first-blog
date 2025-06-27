import * as styles from './Divider.css';

type Props = {
  variant?: 'gray' | 'lightWhite' | 'white';
};

export const Divider = ({ variant = 'gray' }: Props) => {
  return (
    <div className={styles.divider}>
      <div className={styles.line({ color: variant })} />
      <div className={styles.halfLine({ color: variant })} />
    </div>
  );
};
