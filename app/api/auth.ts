import { z } from 'zod';
import { setToken } from '../lib/auth';
import { apiPost } from './api';

export const authFormSchema = z.object({
  login: z.string().min(5, 'Логин должен быть не менее 5 символов'),
  password: z.string().min(5, 'Пароль должен быть не менее 5 символов'),
});

export type AuthFormData = z.infer<typeof authFormSchema>;
type BodyData = { access_token: string };

export const signUp = async (data: AuthFormData) => {
  const response = await apiPost<BodyData>('/signup', data);
  const token = response.data?.access_token;

  if (token) {
    setToken(token);
  }

  return response;
};

export const signIn = async (data: AuthFormData) => {
  const response = await apiPost<BodyData>('/signin', data);
  const token = response.data?.access_token;

  if (token) {
    setToken(token);
  }

  return response;
};
