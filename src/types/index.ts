export interface FormatterType {
    id: string;
    label: string;
    transform: (text: string) => string;
  }