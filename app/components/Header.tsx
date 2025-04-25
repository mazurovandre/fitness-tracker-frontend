import Image from 'next/image';
import Link from 'next/link';
import { AuthDialog } from './AuthDialog';

export function Header() {
  return (
    <header className='w-full px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center mx-auto'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image src='/logo.svg' alt='Fitness Tracker Logo' width={32} height={32} priority />
          <span className='font-semibold'>Fitness Tracker</span>
        </Link>
        <nav className='flex flex-1 items-center justify-end space-x-4'>
          <AuthDialog />
        </nav>
      </div>
    </header>
  );
}
