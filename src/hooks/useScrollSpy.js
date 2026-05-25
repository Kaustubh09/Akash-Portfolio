import { useEffect, useState } from 'react';

// Tracks which section is currently in view and returns its id.
// Used by the navbar to highlight the active link as the user scrolls.
export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}
