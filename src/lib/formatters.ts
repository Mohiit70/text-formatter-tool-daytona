import { FormatterType } from '@/types';

export const formatters: FormatterType[] = [
  {
    id: 'bold-serif',
    label: 'Bold (serif)',
    transform: (text) => text.split('').map(char => 
      char === ' ' ? ' ' : '𝐓'.replace('𝐓', char)).join('')
  },
  {
    id: 'bold-sans',
    label: 'Bold (sans)',
    transform: (text) => text.split('').map(char => 
      char === ' ' ? ' ' : '𝗧'.replace('𝗧', char)).join('')
  },
  {
    id: 'italic-bold',
    label: 'Italic Bold (serif)',
    transform: (text) => text.split('').map(char => 
      char === ' ' ? ' ' : '𝑻'.replace('𝑻', char)).join('')
  },
  {
    id: 'medieval',
    label: 'Medieval',
    transform: (text) => text.split('').map(char => 
      char === ' ' ? ' ' : '𝔗'.replace('𝔗', char)).join('')
  },
  {
    id: 'double-struck',
    label: 'Double-Struck',
    transform: (text) => text.split('').map(char => 
      char === ' ' ? ' ' : '𝕋'.replace('𝕋', char)).join('')
  }
];
