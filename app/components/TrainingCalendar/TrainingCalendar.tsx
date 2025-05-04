'use client';

import { Calendar } from '@/components/ui/calendar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';

export function TrainingCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='calendar'>
        <AccordionTrigger className='text-lg pt-0 pb-2 !no-underline'>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='mb-[2px]' />
            {date ? format(date, 'd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex justify-center p-0'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              className='rounded-md border'
              locale={ru}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
