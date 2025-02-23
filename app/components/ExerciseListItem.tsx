'use client';

import { Input } from '@/components/ui/input';
import React from 'react';
import { IExercise } from '../types/types';

interface IProps {
  exercise: IExercise;
}

const ExerciseListItem: React.FC<IProps> = ({ exercise }) => {
  const { name, sets, reps, weight } = exercise;

  return (
    <div className='flex items-center justify-between border-spacing-2 gap-8 px-3 py-2 border rounded'>
      <div className='text-sm'>{name}</div>
      <div className='flex items-center gap-2'>
        <Input type='number' value={sets} onChange={() => {}} className='w-16' />
        <span className='text-sm'>x</span>
        <Input type='number' value={reps} onChange={() => {}} className='w-16' />
        <span className='text-sm'> - </span>
        <Input type='number' value={weight} onChange={() => {}} className='w-16' />
        <span className='text-sm'> кг.</span>
      </div>
    </div>
  );
};

export default ExerciseListItem;
