'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import React from 'react';
import { IWorkout } from '../types/types';

interface IProps {
  workout: IWorkout;
}

const WorkoutListItem: React.FC<IProps> = ({ workout }) => {
  const { exercise, sets, reps, weight } = workout;

  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='exercise' className='border rounded'>
        <AccordionTrigger className='px-3 py-2 hover:no-underline'>
          <div className='text-sm'>{exercise?.name}</div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex items-center gap-2 px-3 pt-2 w-full'>
            <Input type='number' value={sets} onChange={() => {}} className='w-full' />
            <span className='text-sm'>x</span>
            <Input type='number' value={reps} onChange={() => {}} className='w-full' />
            <span className='text-sm'> - </span>
            <Input type='number' value={weight} onChange={() => {}} className='w-full' />
            <span className='text-sm'>кг</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default WorkoutListItem;
