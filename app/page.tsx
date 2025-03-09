import ExerciseList from './components/ExerciseList/ExerciseList';

export default function Home() {
  return (
    <div className='flex flex-col gap-8 row-start-2'>
      <ExerciseList />
    </div>
  );
}
