'use client';

import React from 'react';
import { IExercise } from '../types/types';
import ExerciseListItem from './ExerciseListItem';

const data: IExercise[] = [
  {
    id: 1,
    name: 'Bench Press',
    sets: 3,
    reps: 10,
    weight: 200,
  },
  {
    id: 2,
    name: 'Bench Press 2',
    sets: 2,
    reps: 10,
    weight: 200,
  },
  {
    id: 3,
    name: 'Bench Press 3',
    sets: 5,
    reps: 10,
    weight: 200,
  },
];

const ExerciseList: React.FC = () => {
  const items = data.map((ex) => <ExerciseListItem key={ex.id} exercise={ex} />);

  return <div className='flex flex-col gap-2'>{items}</div>;
};

export default ExerciseList;
