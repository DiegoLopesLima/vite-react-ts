import { ReactNode } from 'react';
import { Icon } from '@iconify/react';

interface NavListProps {
  children: ReactNode;
}

export default function NavList({ children }: NavListProps) {
  return (
    <nav>
      <button type="button" className="lg:hidden">
        <Icon icon="mdi:menu" />
      </button>

      <h2 className="sr-only">Navigation</h2>

      <ul className="flex gap-2">
        {children}
      </ul>
    </nav>
  );
}
