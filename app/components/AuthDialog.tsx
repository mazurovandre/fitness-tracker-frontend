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

const formSchema = z.object({
  login: z.string().min(3, 'Логин должен быть больше 3 символов'),
  password: z.string().min(6, 'Пароль должен быть больше 6 символов'),
});

export function AuthDialog() {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setError(null);
      setIsPending(true);
      // Здесь будет логика авторизации
      console.log(values);
      setOpen(false);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline'>Войти</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-center text-2xl font-semibold'>
            {isSignUp ? 'Регистрация' : 'Вход'}
          </DrawerTitle>
          <p className='text-center text-sm text-muted-foreground'>
            {isSignUp
              ? 'Создайте аккаунт для отслеживания тренировок'
              : 'Войдите в свой аккаунт'}
          </p>
        </DrawerHeader>
        <div className="px-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 mx-auto'>
              <FormField
                control={form.control}
                name='login'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email или логин</FormLabel>
                    <FormControl>
                      <Input placeholder='email@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <Input type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && (
                <p className='text-sm text-red-500 text-center'>
                  {error instanceof Error ? error.message : 'Произошла ошибка'}
                </p>
              )}
              <DrawerFooter className="gap-4">
                <Button type='submit' className="w-full" disabled={isPending}>
                  {isPending ? 'Загрузка...' : isSignUp ? 'Зарегистрироваться' : 'Войти'}
                </Button>
                <p className='text-center text-sm'>
                  {isSignUp ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}{' '}
                  <button
                    type='button'
                    onClick={() => setIsSignUp(!isSignUp)}
                    className='text-primary hover:underline'
                  >
                    {isSignUp ? 'Войти' : 'Зарегистрироваться'}
                  </button>
                </p>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
