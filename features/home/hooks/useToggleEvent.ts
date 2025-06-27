import { useEffect, useRef } from 'react';

export const useToggleEvent = (onToggle: (toggle: boolean) => void) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popoverEl = popoverRef.current;
    if (!popoverEl) return;

    const handleToggle = (event: Event) => {
      const toggleEvent = event as ToggleEvent;
      const newState = toggleEvent.newState;

      if (newState === 'open') onToggle(true);
      else onToggle(false);
    };

    popoverEl.addEventListener('toggle', handleToggle);
    return () => {
      popoverEl.removeEventListener('toggle', handleToggle);
    };
  }, []);

  return popoverRef;
};
