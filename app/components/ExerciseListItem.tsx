import React from 'react';
import { IExercise } from '../types/types';
import { pluralize } from '../utils/strings';

interface IProps {
  exercise: IExercise;
}

const ExerciseListItem: React.FC<IProps> = ({ exercise }) => {
  const { name, sets, reps, weight } = exercise;

  return (
    <div className='flex border-spacing-2 gap-2 px-3 py-2 border rounded'>
      <span className='text-sm'>{name}</span>
      <span className='text-sm'>
        {sets} {pluralize(sets, ['подход', 'подхода', 'подходов'])}
      </span>
      <span className='text-sm'>
        {reps} {pluralize(reps, ['повторение', 'повторения', 'повторений'])}
      </span>
      <span className='text-sm'>{weight} кг.</span>
    </div>
  );
};

export default ExerciseListItem;
