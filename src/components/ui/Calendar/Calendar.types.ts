import { DataType } from 'types';

export interface Props {
  dataEvent: DataType[];
  dataFormDate: string | null;
  onChange: (data: DataType) => void;
  onEvent: (date: string | null) => void;
}
