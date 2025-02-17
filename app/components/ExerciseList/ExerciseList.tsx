import React from 'react';
import ExerciseListItem from '../ExerciseListItem';
import { fetchExercises } from './fetchExercises';

export default async function ExerciseList() {
  const data = await fetchExercises();
  const items = data.map((ex) => <ExerciseListItem key={ex.id} exercise={ex} />);

  return <div className='flex flex-col gap-2'>{items}</div>;
}
