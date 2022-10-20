import React from 'react';

import { Props } from './Form.types';

import Button from '../Button';
import DatePicker from '../DatePicker';
import Textarea from '../Textarea';
import TextInput from '../TextInput';

import styles from './Form.module.scss';

const Form = ({ dataForm, disabled, onChange, onSubmit }: Props) => (
  <form
    className={styles.form}
  >
    <div className={styles.form__title}>Добавить событие</div>

    <DatePicker
      value={dataForm?.date}
      onChange={value => onChange({ ...dataForm, date: value })}
      disabled={disabled}
    />

    <TextInput
      value={dataForm?.name}
      onChange={value => onChange({ ...dataForm, name: value })}
      disabled={disabled}
      placeholder="Укажите краткое название"
    />

    <Textarea
      value={dataForm?.description}
      onChange={value => onChange({ ...dataForm, description: value })}
      disabled={disabled}
      placeholder="Введите описание"
    />

    <Button
      wide
      onClick={onSubmit}
      disabled={disabled}
    >
      Добавить
    </Button>
  </form>
);

export default Form;
