'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useParams as useNextParams, useRouter } from 'next/navigation';

export interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'style' | 'children'> {
  to?: string;
  href?: string;
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  style?: React.CSSProperties | ((props: { isActive: boolean; isPending: boolean }) => React.CSSProperties | undefined);
  children?: React.ReactNode | ((props: { isActive: boolean; isPending: boolean }) => React.ReactNode);
  activeClassName?: string;
  exact?: boolean;
  end?: boolean;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, href, className, style, children, activeClassName = 'active', end, exact, ...props }, ref) => {
    const pathname = usePathname();
    const destination = to || href || '#';

    const isExternal =
      destination.startsWith('http://') ||
      destination.startsWith('https://') ||
      destination.startsWith('//') ||
      destination.startsWith('mailto:') ||
      destination.startsWith('tel:');

    const isAnchor = destination === '#' || destination.startsWith('#');

    const isActive = Boolean(
      pathname &&
      !isExternal &&
      !isAnchor &&
      (exact || end
        ? pathname === destination
        : pathname === destination || (destination !== '/' && pathname.startsWith(destination)))
    );

    let computedClassName = '';
    if (typeof className === 'function') {
      computedClassName = className({ isActive, isPending: false }) || '';
    } else if (className) {
      computedClassName = className;
      if (isActive && activeClassName && !computedClassName.includes(activeClassName)) {
        computedClassName = `${computedClassName} ${activeClassName}`;
      }
    } else if (isActive && activeClassName) {
      computedClassName = activeClassName;
    }

    const computedStyle = typeof style === 'function' ? style({ isActive, isPending: false }) : style;
    const computedChildren = typeof children === 'function' ? children({ isActive, isPending: false }) : children;

    if (isExternal || isAnchor) {
      return (
        <a href={destination} className={computedClassName} style={computedStyle} ref={ref} {...props}>
          {computedChildren}
        </a>
      );
    }

    return (
      <Link href={destination} className={computedClassName} style={computedStyle} ref={ref} {...props}>
        {computedChildren}
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';

export const LinkComponent = NavLink;
export { NavLink as Link };

export function useLocation() {
  const pathname = usePathname();
  return {
    pathname: pathname || '',
    search: '',
    hash: '',
    state: null,
    key: 'default',
  };
}

export function useParams<T extends Record<string, string | string[]> = Record<string, string>>() {
  const params = useNextParams();
  return (params || {}) as T;
}

export function useNavigate() {
  const router = useRouter();
  return (to: string | number) => {
    if (typeof to === 'number') {
      if (typeof window !== 'undefined') {
        window.history.go(to);
      }
    } else {
      router.push(to);
    }
  };
}

export function useSearchParams() {
  return [new URLSearchParams(), () => { }] as const;
}

export function useMatch() {
  return null;
}

export function useHref(to: string) {
  return to;
}

export const BrowserRouter = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Routes = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Route = ({ element }: { path?: string; element?: React.ReactNode }) => <>{element}</>;
export const Outlet = () => null;

export default NavLink;

