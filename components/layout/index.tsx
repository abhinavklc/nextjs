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
          <Link href="/">
            <a className={`${pathname === '/' ? 'active' : ''}`}>Home</a>
          </Link>
          <Link href="/states">
            <a className={`${pathname === '//states' ? 'active' : ''}`}>States</a>
          </Link>
          <Link href="/apiCall">
            <a className={`${pathname === '/apiCall' ? 'active' : ''}`}>API Calling</a>
          </Link>
          <Link href="/swr">
            <a className={`${pathname === '/swr' ? 'active' : ''}`}>SWR</a>
          </Link>
          <Link href="/useCallback">
            <a className={`${pathname === '/useCallback' ? 'active' : ''}`}>UseCallback</a>
          </Link>
        </nav>
      </header>
      {children}
    </LayoutStyle>
  );
};

export default Layout;
