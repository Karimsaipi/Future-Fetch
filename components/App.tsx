import React from 'react';
import styles from './style.module.scss';
import picture from '../assets/img1.png';
import picture2 from '../assets/img3.jpg'

export const App = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log('Имя:', formData.get('name'));
    console.log('Фамилия:', formData.get('surname'));
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.h2}> PLATFORM = {__PLATFORM__}</h1>
      <h2 className={styles.h2}>Введите ваши данные</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>Имя:</label>
        <input type="text" id="name" name="name" required className={styles.input} />

        <label htmlFor="surname" className={styles.label}>Фамилия:</label>
        <input type="text" id="surname" name="surname" required className={styles.input} />

        <button type="submit" className={styles.button}>Отправить</button>
        <div className={styles.image}><img src={picture} alt="Описание" /></div>
      </form>
    </div>
  );
};

console.log('STYLES:', styles);