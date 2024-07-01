import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LayoutStyle from './layoutStyle';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();

  return (
    <LayoutStyle>
      <header>
        <nav>
          <Link href="/" className={`${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/states" className={`${pathname === '//states' ? 'active' : ''}`}>
            States
          </Link>
          <Link href="/apiCall" className={`${pathname === '/apiCall' ? 'active' : ''}`}>
            API Calling
          </Link>
          <Link href="/swr" className={`${pathname === '/swr' ? 'active' : ''}`}>
            SWR
          </Link>
          <Link
            href="/useCallback"
            className={`${pathname === '/useCallback' ? 'active' : ''}`}>
            UseCallback
          </Link>
        </nav>
      </header>
      {children}
    </LayoutStyle>
  );
};

export default Layout;
