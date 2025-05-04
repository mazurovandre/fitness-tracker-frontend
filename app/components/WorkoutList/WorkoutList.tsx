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
      setWorkouts(data.slice(0, 3));
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
    <div className='h-full flex flex-col gap-2'>
      <TrainingCalendar />
      <div className='flex flex-col gap-2 pb-24'>
        {workouts.map((workout) => (
          <ExerciseListItem key={workout.id} workout={workout} />
        ))}
      </div>
      <div className='fixed bottom-16 left-0 right-0 p-4 bg-background border-t md:bottom-0 md:border-t-0 z-10'>
        <AddWorkout onSubmit={handleAddExercises} />
      </div>
    </div>
  );
}
