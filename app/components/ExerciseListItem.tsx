'use client';

import React from 'react';
import { IExercise } from '../types/types';

interface IProps {
  exercise: IExercise;
}

const ExerciseListItem: React.FC<IProps> = ({ exercise }) => {
  const { name, sets, reps, weight } = exercise;

  return (
    <div className='flex border-spacing-2 gap-2 px-3 py-2 border rounded'>
      <span className='text-sm'>{name}</span>
      <span className='text-sm'>{sets} sets</span>
      <span className='text-sm'>{reps} reps</span>
      <span className='text-sm'>{weight} lbs</span>
    </div>
  );
};

export default ExerciseListItem;
