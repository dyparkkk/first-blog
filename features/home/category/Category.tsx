import * as styles from './Category.css';
import { useToggleEvent } from '../hooks/useToggleEvent';
import { Divider } from '@/components/divider/Divider';
import { SelfInfo } from './SelfInfo';
import { CategoryList } from './CategoryList';

type Props = {
  onToggle: (toggle: boolean) => void;
};

export const Category = ({ onToggle }: Props) => {
  const popoverRef = useToggleEvent(onToggle);

  return (
    <div
      id="category"
      popover="auto"
      className={styles.category}
      ref={popoverRef}
    >
      <CategoryList />
      <Divider variant="lightWhite" />
      <SelfInfo />
    </div>
  );
};
