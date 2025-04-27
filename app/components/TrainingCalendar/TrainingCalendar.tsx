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

export function TrainingCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='calendar'>
        <AccordionTrigger className='text-lg pt-0 !no-underline'>
          {date ? format(date, 'd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex justify-center p-4'>
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
