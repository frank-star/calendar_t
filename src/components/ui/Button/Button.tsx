import React from 'react';
import classNames from 'classnames';
import type { Props } from './Button.types';

import styles from './Button.module.scss';

const Button = ({ wide, disabled, onClick, children }: Props) => (
  <button
    type="button"
    className={classNames(styles.button, { [styles.button_isWide]: wide })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
