import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Documentación de San Andreas Roleplay">
      <section className={styles.welcome}>
        <img src="/img/sarp/logo.png" alt="Logo SARP" className={styles.logo} />
        <h1 className={styles.title}>Bienvenido a la Docs de SARP</h1>
        <p className={styles.subtitle}>
          Aquí encontrarás toda la información sobre el servidor.
        </p>
        <Link to="/docs/inicio" className={styles.button}>
          Ver documentación →
        </Link>
      </section>
    </Layout>
  );
}