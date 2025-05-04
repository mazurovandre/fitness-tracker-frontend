'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/app/config/navigation';

export default function TabBar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Header */}
      <header className='hidden md:flex items-center justify-between px-6 h-16 border-b'>
        <div className='flex items-center gap-8'>
          <Link href='/' className='text-xl font-bold'>
            Fitness Tracker
          </Link>
          <nav className='flex items-center gap-6'>
            {navigationItems.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={cn(
                    'flex items-center gap-2 text-sm transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                  )}
                >
                  <tab.icon className='h-4 w-4' />
                  <span>{tab.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile TabBar */}
      <div className='fixed bottom-0 left-0 right-0 border-t bg-background md:hidden z-50'>
        <div className='grid h-16 grid-cols-4'>
          {navigationItems.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 text-xs transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                <tab.icon className='h-5 w-5' />
                <span>{tab.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
