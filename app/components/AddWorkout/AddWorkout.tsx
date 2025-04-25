'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export default function AddWorkout() {
  const [open, setOpen] = useState(false);
  const formSchema = z.object({
    name: z.string().min(6, 'Название должно быть больше 6 символов'),
    sets: z.number().min(1, 'Количество серий должно быть больше 0'),
    reps: z.number().min(1, 'Количество повторений должно быть больше 0'),
    weight: z.number().min(1, 'Вес должен быть больше 0'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      sets: 0,
      reps: 0,
      weight: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('!!!', values);
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className='fixed bottom-0 left-0 right-0 z-50 px-4 py-4 bg-background'>
          <Button className='w-full h-12'>Добавить упражнение</Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Добавить упражнение</DrawerTitle>
          <p className="text-sm text-muted-foreground">Заполните форму</p>
        </DrawerHeader>
        <div className="px-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
              <DrawerFooter>
                <Button type='submit'>Сохранить</Button>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
