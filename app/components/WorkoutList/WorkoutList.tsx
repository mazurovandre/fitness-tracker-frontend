'use client';

import { IExercise, IWorkout } from '@/app/types/types';
import { AddWorkout } from '../AddWorkout/AddWorkout';
import { TrainingCalendar } from '../TrainingCalendar/TrainingCalendar';
import ExerciseListItem from '../WorkoutListItem';
import { fetchWorkouts } from './fetchWorkouts';
import { useEffect, useState } from 'react';

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const loadWorkouts = async () => {
      const data = await fetchWorkouts();
      setWorkouts(data);
    };
    loadWorkouts();
  }, []);

  const handleAddExercises = async (exercises: IExercise[]) => {
    const newWorkouts: IWorkout[] = exercises.map((exercise) => ({
      id: Math.random(),
      exercise: exercise,
      sets: 0,
      reps: 0,
      weight: 0,
    }));

    setWorkouts(newWorkouts);
  };

  return (
    <div className='h-full flex flex-col gap-4 pb-16'>
      <TrainingCalendar />
      <div className='flex flex-col gap-2'>
        {workouts.map((workout) => (
          <ExerciseListItem key={workout.id} workout={workout} />
        ))}
      </div>
      <AddWorkout onSubmit={handleAddExercises} />
    </div>
  );
}
