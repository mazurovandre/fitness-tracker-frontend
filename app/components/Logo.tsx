'use client';

import { Dumbbell } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className='w-10 h-10 bg-primary rounded-sm flex items-center justify-center'>
      <Dumbbell className='w-6 h-6 text-white' />
    </div>
  );
}
