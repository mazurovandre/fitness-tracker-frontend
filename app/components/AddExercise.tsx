'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

export default function AddExercise() {
  const form = useForm({
    defaultValues: {
      name: '',
      sets: 0,
      reps: 0,
      weight: 0,
    },
  });

  const onSubmit = (values: any) => {
    console.log('!!!', values);
    // setOpen(false); // Закрываем диалог после отправки
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full h-12'>Добавить упражнение</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Добавить упражнение</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название</FormLabel>
                  <FormControl>
                    <Input placeholder='Например, жим лежа' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='sets'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Кол-во подходов</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='reps'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Кол-во повторений</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='weight'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Вес</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <Button type='submit'>Сохранить</Button>
        </Form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
