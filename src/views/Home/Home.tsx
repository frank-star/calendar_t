import React, { useEffect, useState } from 'react';

import { DataType } from 'types';

import Calendar from 'components/ui/Calendar';
import Form from 'components/ui/Form';

import styles from './Home.module.scss';

const Home = () => {
  const [dataEvent, onSetDataEvent] = useState<DataType[]>([]);
  const [viewData, setViewData] = useState<DataType | null>(null);
  const [dataForm, setDataForm] = useState<DataType | null>(viewData || null);

  useEffect(() => {
    setDataForm(viewData);
  }, [viewData]);

  const onSubmitForm = () => {
    if (dataForm && dataForm.date && dataForm.name) {
      setDataForm({
        date: '',
        name: '',
        description: '',
      });

      onSetDataEvent([...dataEvent, dataForm]);
      // eslint-disable-next-line no-alert
    } else alert('Ошибка: Не все обязательные поля заполнены!');
  };

  const onEvent = (date: string | null) => {
    setViewData(null);

    if (date) {
      setDataForm({
        date,
        name: '',
        description: '',
      });
    }
  };

  return (
    <div className={styles.homePage}>

      <header className={styles.homePage__header}>Календарь</header>

      <section className={styles.homePage__bodyContainer}>
        <Calendar dataEvent={dataEvent} onChange={setViewData} dataFormDate={dataForm?.date || null} onEvent={onEvent} />

        <div className={styles.homePage__containerForm}>
          <Form dataForm={dataForm} onChange={setDataForm} onSubmit={onSubmitForm} disabled={!!viewData} />
        </div>
      </section>
    </div>
  );
};

export default Home;
