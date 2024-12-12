import React from 'react';
import Button from '../../ui/button/button';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const garagePage = localStorage.getItem('garagePage') || '1';
  const winnersPage = localStorage.getItem('winnersPage') || '1';

  return (
    <header className={styles.header}>
      <h1>Async Race</h1>
      <div className={styles.buttons}>
        <Button to={`/garage?page=${garagePage}`}>Garage</Button>
        <Button to={`/winners?page=${winnersPage}`}>Winners</Button>
      </div>
    </header>
  );
};

export default Header;
