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
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { authFormSchema, signIn, signUp } from '../api/auth';

export function AuthDialog() {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const {
    mutate: signUpMutation,
    isPending: isSignUpPending,
    error: signUpError,
  } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      setOpen(false);
      form.reset();
    },
  });

  const {
    mutate: signInMutation,
    isPending: isSignInPending,
    error: signInError,
  } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      setOpen(false);
      form.reset();
    },
  });

  const onSubmit = (values: z.infer<typeof authFormSchema>) => {
    console.log(values);
    if (isSignUp) {
      signUpMutation(values);
    } else {
      signInMutation(values);
    }
  };

  const isPending = isSignUp ? isSignUpPending : isSignInPending;
  const error = isSignUp ? signUpError : signInError;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Войти</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[400px]'>
        <DialogHeader>
          <DialogTitle className='text-center text-2xl font-semibold'>
            {isSignUp ? 'Регистрация' : 'Вход'}
          </DialogTitle>
          <p className='text-center text-sm text-muted-foreground'>
            {isSignUp ? 'Создайте аккаунт для отслеживания тренировок' : 'Войдите в свой аккаунт'}
          </p>
        </DialogHeader>
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
            <DialogFooter>
              <Button type='submit' disabled={isPending}>
                {isPending ? 'Загрузка...' : isSignUp ? 'Зарегистрироваться' : 'Войти'}
              </Button>
            </DialogFooter>
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
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
