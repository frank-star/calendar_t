import React from 'react';

import { Props } from './TextInput.types';

import styles from './TextInput.module.scss';

const TextInput = ({
  value,
  placeholder,
  disabled,
  required,
  onChange = () => {},
}: Props) => (
  <input
    className={styles.textInput}
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
  />
);

export default TextInput;
