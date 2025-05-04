export default function Workouts() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Тренировки</h1>
      </div>
      <div className='grid gap-4'>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Грудь и трицепс</h2>
          <p className='text-sm text-muted-foreground'>5 упражнений</p>
        </div>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Спина и бицепс</h2>
          <p className='text-sm text-muted-foreground'>6 упражнений</p>
        </div>
        <div className='rounded-lg border p-4'>
          <h2 className='text-lg font-semibold'>Ноги</h2>
          <p className='text-sm text-muted-foreground'>7 упражнений</p>
        </div>
      </div>
    </div>
  );
}
