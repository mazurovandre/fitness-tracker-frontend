// Ключ для хранения токена в cookie
const TOKEN_KEY = 'fitness_tracker_token';

// Получение токена из cookie
export const getToken = (): string | null => {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${TOKEN_KEY}=`)) {
        return cookie.substring(TOKEN_KEY.length + 1);
      }
    }
  }
  return null;
};

// Сохранение токена в cookie
export const setToken = (token: string): void => {
  if (typeof document !== 'undefined') {
    // Устанавливаем cookie на 7 дней
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    document.cookie = `${TOKEN_KEY}=${token}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict`;
  }
};

// Удаление токена из cookie
export const removeToken = (): void => {
  if (typeof document !== 'undefined') {
    document.cookie = `${TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};

// Проверка, авторизован ли пользователь
export const isAuthenticated = (): boolean => {
  return !!getToken();
};

// Добавление токена к заголовкам запроса
export const getAuthHeaders = (): HeadersInit => {
  const token = getToken();
  return token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    : {
        'Content-Type': 'application/json',
      };
};
