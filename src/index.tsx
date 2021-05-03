import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Searcher from './components/Searcher/Searcher.jsx';
import styles from './index.module.scss';

ReactDOM.render(
  <div className={styles.wrapper}>
    <main>
      <Header />
      <Searcher />
      <Footer />
    </main>
  </div>
  ,
  document.getElementById('root')
);


