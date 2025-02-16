export interface IExercise {
  id: number;
  name: string;
  description?: string;
  sets: number;
  reps: number;
  rest?: number;
  weight: number;
}
