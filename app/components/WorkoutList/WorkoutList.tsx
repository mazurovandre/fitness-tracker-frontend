import AddExercise from '../AddWorkout/AddWorkout';
import { TrainingCalendar } from '../TrainingCalendar/TrainingCalendar';
import ExerciseListItem from '../WorkoutListItem';
import { fetchWorkouts } from './fetchWorkouts';

export default async function ExerciseList() {
  const data = await fetchWorkouts();
  const items = data.map((ex) => <ExerciseListItem key={ex.id} workout={ex} />);

  return (
    <div className='h-full flex flex-col gap-4 pb-16'>
      <TrainingCalendar />
      <div className='flex flex-col gap-2'>{items}</div>
      <AddExercise />
    </div>
  );
}
