'use client';

import { Input } from '@/components/ui/input';
import React from 'react';
import { IExercise, IWorkout } from '../types/types';

interface IProps {
  workout: IWorkout;
}

const WorkoutListItem: React.FC<IProps> = ({ workout }) => {
  const { exercise, sets, reps, weight } = workout;

  return (
    <div className='flex items-center justify-between border-spacing-2 gap-2 px-3 py-2 border rounded'>
      <div className='text-sm'>{exercise?.name}</div>
      <div className='flex items-center gap-1'>
        <Input type='number' value={sets} onChange={() => {}} className='w-12' />
        <span className='text-sm'>x</span>
        <Input type='number' value={reps} onChange={() => {}} className='w-12' />
        <span className='text-sm'> - </span>
        <Input type='number' value={weight} onChange={() => {}} className='w-16' />
        <span className='text-sm'>кг</span>
      </div>
    </div>
  );
};

export default WorkoutListItem;
