import { NotebookIcon, Dumbbell, ChartLine, Settings } from 'lucide-react';

export const navigationItems = [
  {
    name: 'Журнал',
    href: '/',
    icon: NotebookIcon,
  },
  {
    name: 'Тренировки',
    href: '/workouts',
    icon: Dumbbell,
  },
  {
    name: 'Статистика',
    href: '/statistic',
    icon: ChartLine,
  },
  {
    name: 'Настройки',
    href: '/settings',
    icon: Settings,
  },
];

export const pageTitles: Record<string, string> = {
  '/': 'Журнал тренировок',
  '/workouts': 'Тренировки',
  '/statistic': 'Статистика',
  '/settings': 'Настройки',
};
