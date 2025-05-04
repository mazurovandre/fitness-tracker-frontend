'use client';

import { usePathname } from 'next/navigation';
import { pageTitles, navigationItems } from '@/app/config/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname];
  const isMainPage = navigationItems.some((item) => item.href === pathname);

  return (
    <div className='sticky top-0 flex px-4 pt-4 pb-4 gap-4 items-center justify-between border-b bg-background md:hidden z-50'>
      <div className='w-[80px]'>
        {!isMainPage && (
          <Link href='/' className='flex items-center gap-1'>
            <ChevronLeft className='h-4 w-4' />
            <span>Назад</span>
          </Link>
        )}
      </div>
      <div className='font-bold flex-1 text-center'>{title}</div>
      <div className='w-[80px]' />
    </div>
  );
}
