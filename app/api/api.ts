import { getAuthHeaders } from '../lib/auth';

// Базовый URL API
const API_URL = 'http://localhost:3000';

// Типы ответов API
export type ApiResponse<T> = {
  data?: T;
  error?: string;
};

// Функция для выполнения GET запросов
export const apiGet = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Неизвестная ошибка' };
  }
};

// Функция для выполнения POST запросов
export const apiPost = async <T>(endpoint: string, body: any): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Неизвестная ошибка' };
  }
};

// Функция для выполнения PUT запросов
export const apiPut = async <T>(endpoint: string, body: any): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Неизвестная ошибка' };
  }
};

// Функция для выполнения DELETE запросов
export const apiDelete = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Неизвестная ошибка' };
  }
};
