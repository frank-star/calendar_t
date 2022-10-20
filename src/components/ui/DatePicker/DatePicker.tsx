import React from 'react';

import { Props } from './DatePicker.types';

import styles from './DatePicker.module.scss';

const DatePicker = ({
  value,
  placeholder,
  disabled,
  required,
  onChange = () => { },
}: Props) => (
  <input
    className={styles.datePicker}
    type="date"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
  />
);

export default DatePicker;
