'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/app/config/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import Logo from './Logo';

export default function TabBar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Header */}
      <header className='hidden md:flex items-center justify-center h-16 border-b'>
        <div className='flex items-center justify-between flex-1 container mx-auto px-4'>
          <Link href='/' className='text-xl font-bold flex items-center gap-4'>
            <Logo />
            Fitness Tracker
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-2 text-sm hover:text-primary'>
              <Menu className='h-5 w-5' />
              <span>Меню</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {navigationItems.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                  <DropdownMenuItem key={tab.href} asChild>
                    <Link
                      href={tab.href}
                      className={cn(
                        'flex items-center gap-2 text-sm',
                        isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                      )}
                    >
                      <tab.icon className='h-4 w-4' />
                      <span>{tab.name}</span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
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
