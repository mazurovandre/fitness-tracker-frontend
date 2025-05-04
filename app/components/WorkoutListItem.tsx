'use client';

import { IWorkout } from '@/app/types/types';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dumbbell, Repeat2, Weight } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import * as z from 'zod';

const formSchema = z.object({
  sets: z.number().min(0, 'Количество подходов должно быть больше 0'),
  reps: z.number().min(0, 'Количество повторений должно быть больше 0'),
  weight: z.number().min(0, 'Вес должен быть больше 0'),
});

export default function WorkoutListItem({ workout }: { workout: IWorkout }) {
  const { exercise } = workout;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sets: workout.sets,
      reps: workout.reps,
      weight: workout.weight,
    },
  });

  const debouncedSubmit = useDebouncedCallback((values: z.infer<typeof formSchema>) => {
    console.log('Saving workout:', values);
    // Здесь будет логика сохранения в API
  }, 1000);

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.sets !== undefined && value.reps !== undefined && value.weight !== undefined) {
        debouncedSubmit({
          sets: value.sets,
          reps: value.reps,
          weight: value.weight,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch, debouncedSubmit]);

  return (
    <Form {...form}>
      <form className='border rounded p-3'>
        <div className='text-sm mb-2'>{exercise?.name}</div>
        <div className='flex items-center gap-2 w-full'>
          <FormField
            control={form.control}
            name='sets'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <div className='relative'>
                    <Repeat2 className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10' />
                    <Input
                      type='text'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      min={1}
                      max={10}
                      className='pl-9 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <span className='text-sm'>x</span>
          <FormField
            control={form.control}
            name='reps'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <div className='relative'>
                    <Dumbbell className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10' />
                    <Input
                      type='text'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      min={1}
                      max={20}
                      className='pl-9 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <span className='text-sm'>-</span>
          <FormField
            control={form.control}
            name='weight'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <div className='relative'>
                    <Weight className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10' />
                    <Input
                      type='text'
                      inputMode='decimal'
                      pattern='[0-9]*'
                      min={0}
                      max={200}
                      step={2.5}
                      className='pl-9 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
