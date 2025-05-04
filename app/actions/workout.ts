'use server';

import { IExercise, IWorkout } from '@/app/types/types';
import { revalidatePath } from 'next/cache';

export async function addWorkouts(exercises: IExercise[]): Promise<IWorkout[]> {
  try {
    // Здесь будет реальный запрос к API
    const newWorkouts: IWorkout[] = exercises.map((exercise) => ({
      id: Math.random(),
      exercise: exercise,
      sets: 0,
      reps: 0,
      weight: 0,
    }));

    // После успешного добавления обновляем кеш
    revalidatePath('/');

    return newWorkouts;
  } catch (error) {
    console.error('Error adding workouts:', error);
    throw error;
  }
}
