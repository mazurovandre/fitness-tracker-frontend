import { IWorkout } from '@/app/types/types';
import { faker } from '@faker-js/faker';
import { exercises } from './fetchExercises';

const generateFakeWorkouts = (count: number = 10): IWorkout[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    exercise: exercises[faker.number.int({ min: 0, max: exercises.length - 1 })],
    description: faker.lorem.sentence(),
    sets: faker.number.int({ min: 3, max: 5 }),
    reps: faker.number.int({ min: 8, max: 12 }),
    rest: faker.number.int({ min: 30, max: 120 }),
    weight: faker.number.int({ min: 5, max: 100 }),
  }));
};

export const fetchWorkouts = async (): Promise<IWorkout[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(generateFakeWorkouts(10)), 500));
};
