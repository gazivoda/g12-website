'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-primary-light tracking-wider">
        {/* Home icon */}
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-accent transition-colors"
          >
            <Home className="w-4 h-4 mr-2" /> Početna
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {/* Separator */}
              <span className="text-accent-light">/</span>

              {/* Breadcrumb item */}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-accent' : ''}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
