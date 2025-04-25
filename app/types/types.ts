export interface IExercise {
  id: number;
  name: string;
  description?: string;
  muscleGroup: MuscleGroup;
}

export interface IWorkout {
  id: number;
  exercise: IExercise;
  description?: string;
  sets: number;
  reps: number;
  rest?: number;
  weight: number;
}

export enum MuscleGroup {
  CHEST = 'CHEST',
  BACK = 'BACK',
  SHOULDERS = 'SHOULDERS',
  BICEPS = 'BICEPS',
  TRICEPS = 'TRICEPS',
  CORE = 'CORE',
  LEGS = 'LEGS',
}
