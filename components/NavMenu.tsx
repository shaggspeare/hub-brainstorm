'use client';

import { useEffect, useId, useState } from 'react';

/* Mobile nav disclosure, shared by the hero header and the six full-page
   headers. Renders the toggle plus the <nav>; above 900px CSS hides the toggle
   and shows the nav unconditionally, so `open` only matters on small screens.
   (A CSS-only <details> was tried first: a closed <details> lays its content
   out at zero width when it is a flex item, which broke the desktop header.) */
export default function NavMenu({
  items,
  navClassName,
  navStyle,
  toggleClassName = 'navToggle',
  wrapClassName = 'navWrap',
  label = 'Меню',
}: {
  items: string[];
  navClassName: string;
  navStyle?: React.CSSProperties;
  toggleClassName?: string;
  wrapClassName?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className={wrapClassName} data-open={open || undefined}>
      <button
        type="button"
        className={toggleClassName}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
      </button>
      <nav className={navClassName} id={id} style={navStyle}>
        {items.map((item) => (
          <a key={item} href="#" onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}
