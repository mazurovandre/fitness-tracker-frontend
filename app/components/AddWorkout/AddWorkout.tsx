'use client';

import { IExercise } from '@/app/types/types';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchExercises } from '../WorkoutList/fetchExercises';
import { Check } from 'lucide-react';

interface AddWorkoutProps {
  onSubmit: (exercises: IExercise[]) => void;
}

export const AddWorkout: React.FC<AddWorkoutProps> = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedExercises, setSelectedExercises] = useState<IExercise[]>([]);

  const addExercise = (exercise: IExercise) => {
    if (selectedExercises.some((e) => e.id === exercise.id)) {
      setSelectedExercises(selectedExercises.filter((e) => e.id !== exercise.id));
    } else {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  const { data: exercises = [] } = useQuery({
    queryKey: ['exercises'],
    queryFn: async () => {
      const response = await fetchExercises();
      return response;
    },
  });

  const onAddExercises = () => {
    onSubmit(selectedExercises);
    setOpen(false);
  };

  const visibleExercises = exercises
    .filter((exercise) => exercise.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter((exercise) => !selectedExercises.some((e) => e.id === exercise.id))
    .slice(0, 5);

  const renderExercises = (exercises: IExercise[]) => {
    return exercises.map((exercise) => (
      <CommandItem
        key={exercise.id}
        value={exercise.name}
        onSelect={() => {
          addExercise(exercise);
        }}
        className={`flex items-center justify-between ${
          selectedExercises.some((e) => e.id === exercise.id) ? 'text-muted-foreground' : ''
        }`}
      >
        <span>
          [{exercise.muscleGroup}] : {exercise.name}
        </span>
        {selectedExercises.some((e) => e.id === exercise.id) && <Check />}
      </CommandItem>
    ));
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className='fixed bottom-0 left-0 right-0 z-50 px-4 py-4 bg-background'>
          <Button className='w-full h-12'>Добавить</Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className='px-4'>
        <DrawerHeader>
          <DrawerTitle>Добавить</DrawerTitle>
        </DrawerHeader>
        <div className='space-y-8 pb-4'>
          <div className='space-y-2'>
            <Label>Упражнение</Label>
            <Command className='border'>
              <CommandInput
                placeholder='Поиск упражнения...'
                value={searchValue}
                onValueChange={setSearchValue}
              />
              <div className=''>
                <CommandEmpty className='h-full flex items-center px-4 py-2'>
                  Упражнение не найдено
                </CommandEmpty>
                <CommandGroup>
                  {renderExercises(visibleExercises)}
                  {renderExercises(selectedExercises)}
                </CommandGroup>
              </div>
            </Command>
          </div>
        </div>
        <DrawerFooter className='px-0'>
          <Button onClick={onAddExercises}>Сохранить</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
