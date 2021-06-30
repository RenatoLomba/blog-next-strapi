import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formatDate = (date: Date, formatString = 'dd/MM/yyyy') => {
  return format(parseISO(date.toString()), formatString, { locale: ptBR });
};
