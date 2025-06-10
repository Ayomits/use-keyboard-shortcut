import { useEffect } from 'react';

export function useKeyboardShortcut(
  condition: (ev: KeyboardEvent) => boolean,
  callback: () => void
) {
  function handleKeyDown(ev: KeyboardEvent) {
    if (condition(ev)) {
      ev.preventDefault();
      callback();
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
