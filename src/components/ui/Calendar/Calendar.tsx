import React from 'react';
import classNames from 'classnames';

import { DataType } from 'types';
import { Props } from './Calendar.types';

import styles from './Calendar.module.scss';

const daysOfWeek = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SUN', 'SAT'];

const intitialColumns = [
  null,
  null,
  null,
  ...Array.from({ length: 30 }, (v, k) => `2022-09-${(k + 1).toString().length > 1 ? k + 1 : `0${k + 1}`}`),
  null,
  null,
];

const Calendar = ({ dataEvent, dataFormDate, onChange, onEvent }: Props) => (
  <div className={styles.calendar}>
    <div className={styles.calendar__actions}>
      <div>{'<'}</div>
      <div>Сентябрь 2022</div>
      <div>{'>'}</div>
    </div>

    <div className={styles.header}>
      {daysOfWeek.map(day => (
        <div
          key={day}
          className={styles.header__item}
        >
          {day}
        </div>
      ))}
    </div>

    <div className={styles.colums}>
      {intitialColumns.map(column => (
        <div className={styles.colums__item}>
          <button
            type="button"
            className={classNames(styles.colums__day, {
              [styles['colums__day--active']]:
                dataFormDate && dataFormDate === column,
            })}
            onClick={() => onEvent(column)}
          >
            {column && Number(column?.slice(8))}
          </button>

          <div className={styles.colums__events}>
            {!!column &&
              dataEvent?.filter(
                (item: DataType) =>
                  item?.date === column,
              )
                .map((item: DataType) => (
                  <button
                    type="button"
                    className={styles.colums__event}
                    onClick={() => onChange(item)}
                  >
                    <span>{item.name}</span>
                  </button>
                ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Calendar;
