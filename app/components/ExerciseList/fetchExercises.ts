import { IExercise } from '@/app/types/types';
import { faker } from '@faker-js/faker';

const generateFakeExercises = (count: number = 10): IExercise[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    sets: faker.number.int({ min: 3, max: 5 }),
    reps: faker.number.int({ min: 8, max: 12 }),
    rest: faker.number.int({ min: 30, max: 120 }),
    weight: faker.number.int({ min: 5, max: 100 }),
  }));
};

export const fetchExercises = async (): Promise<IExercise[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(generateFakeExercises(10)), 500));
};
