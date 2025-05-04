export default function Statistic() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Статистика</h1>
      </div>
      <div className='grid gap-4'>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Прогресс</h2>
          <p className='text-sm text-muted-foreground'>График прогресса по упражнениям</p>
        </div>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Частота тренировок</h2>
          <p className='text-sm text-muted-foreground'>Количество тренировок в неделю</p>
        </div>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Рекорды</h2>
          <p className='text-sm text-muted-foreground'>Максимальные веса и повторения</p>
        </div>
      </div>
    </div>
  );
}
