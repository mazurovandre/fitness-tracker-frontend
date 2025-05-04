'use client';

export default function Header() {
  return (
    <div className='sticky top-0 flex px-4 pt-4 pb-4 gap-4 items-center justify-between border-b bg-background md:hidden z-50'>
      <div className=''>Назад</div>
      <div className='font-bold flex-1 text-center'>Меню</div>
      <div className=''>х</div>
    </div>
  );
}
