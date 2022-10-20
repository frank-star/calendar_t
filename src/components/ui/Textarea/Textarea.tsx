import React from 'react';

import { Props } from './Textarea.types';

import styles from './Textarea.module.scss';

const Textarea = ({
  value,
  placeholder,
  disabled,
  required,
  onChange = () => { },
}: Props) => (
  <textarea
    className={styles.textarea}
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
  />
);

export default Textarea;
