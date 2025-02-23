import { IExercise } from '@/app/types/types';
import { faker } from '@faker-js/faker';

const generateFakeExercises = (count: number = 10): IExercise[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1, // Уникальный ID
    name: faker.commerce.productName(), // Название упражнения
    description: faker.lorem.sentence(), // Описание упражнения
    sets: faker.number.int({ min: 3, max: 5 }), // Количество подходов
    reps: faker.number.int({ min: 8, max: 12 }), // Количество повторений
    rest: faker.number.int({ min: 30, max: 120 }), // Время отдыха в секундах (опционально)
    weight: faker.number.float({ min: 5, max: 50, fractionDigits: 2 }), // Вес для упражнения
  }));
};

export const fetchExercises = async (): Promise<IExercise[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(generateFakeExercises(10)), 500));
};
