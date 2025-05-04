export default function Settings() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Настройки</h1>
      </div>
      <div className='grid gap-4'>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Профиль</h2>
          <p className='text-sm text-muted-foreground'>Личная информация и предпочтения</p>
        </div>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Уведомления</h2>
          <p className='text-sm text-muted-foreground'>Настройки уведомлений о тренировках</p>
        </div>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Единицы измерения</h2>
          <p className='text-sm text-muted-foreground'>Выбор системы измерения (кг/фунты)</p>
        </div>
      </div>
    </div>
  );
}
