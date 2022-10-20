export interface Props {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
}
