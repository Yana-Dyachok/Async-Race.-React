import React from 'react';
import Button from '../../ui/button/button';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Async Race</h1>
      <div className={styles.buttons}>
        {' '}
        <Button to="/Async-Race-React/garage">Garage</Button>
        <Button to="/Async-Race-React/winners">Winners</Button>
      </div>
    </header>
  );
};
export default Header;
