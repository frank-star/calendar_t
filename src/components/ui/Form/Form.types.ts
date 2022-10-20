import { DataType } from 'types';

export interface Props {
  dataForm:DataType | null;
  disabled: boolean;
  onChange: (data: DataType) => void;
  onSubmit: () => void;
}
