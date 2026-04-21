import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>
          © 2025 <a href="https://sarp.es/" className={styles.link}>SARP.es</a>. Todos los derechos reservados.
        </p>
        <p className={styles.text}>
          San Andreas Roleplay no está afiliado ni relacionado con Rockstar Games, SA-MP u open.mp.
        </p>
      </div>
    </footer>
  );
}