import AddExercise from '../AddWorkout/AddWorkout';
import ExerciseListItem from '../WorkoutListItem';
import { fetchWorkouts } from './fetchWorkouts';

export default async function ExerciseList() {
  const data = await fetchWorkouts();
  const items = data.map((ex) => <ExerciseListItem key={ex.id} workout={ex} />);

  return (
    <div className='h-full flex justify-between flex-col gap-2'>
      <div className='flex flex-col gap-2'>{items}</div>
      <AddExercise />
    </div>
  );
}
